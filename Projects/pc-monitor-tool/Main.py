import customtkinter as ctk
import psutil
import platform
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from collections import deque
from matplotlib import rcParams

# Apply dark theme to matplotlib charts
rcParams.update({
    'axes.facecolor': '#1f1f1f',
    'figure.facecolor': '#1f1f1f',
    'axes.edgecolor': '#444444',
    'axes.labelcolor': 'white',
    'xtick.color': 'white',
    'ytick.color': 'white',
    'text.color': 'white',
    'axes.titleweight': 'bold',
    'axes.titlesize': 14,
    'axes.labelsize': 12,
    'lines.linewidth': 2,
    'grid.color': '#333333'
})

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

class SystemMonitorApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("System Monitor — Snapdragon X Elite")
        self.geometry("960x600")
        self.resizable(True, True)

        self.grid_rowconfigure(0, weight=1)
        self.grid_columnconfigure((0, 1), weight=1)

        self.max_length = 60
        self.cpu_data = deque([0] * self.max_length, maxlen=self.max_length)
        self.ram_data = deque([0] * self.max_length, maxlen=self.max_length)
        self.x_data = list(range(-self.max_length + 1, 1))

        self.use_chart = True  # Flag to switch views
        self.bind("<Configure>", self.on_resize)

        # === CPU Frame ===
        self.cpu_frame = ctk.CTkFrame(self, corner_radius=15)
        self.cpu_frame.grid(row=0, column=0, padx=20, pady=20, sticky="nsew")

        self.cpu_title = ctk.CTkLabel(self.cpu_frame, text="CPU Usage", font=("Segoe UI", 18, "bold"))
        self.cpu_title.pack(pady=(15, 5))

        self.cpu_value = ctk.CTkLabel(self.cpu_frame, text="--%", font=("Segoe UI", 24))
        self.cpu_value.pack(pady=(0, 10))

        self.cpu_container = ctk.CTkFrame(self.cpu_frame)
        self.cpu_container.pack(expand=True, fill="both", padx=10, pady=10)

        self.cpu_fig, self.cpu_ax = plt.subplots(figsize=(5, 2.5))
        self.cpu_line, = self.cpu_ax.plot(self.x_data, self.cpu_data, color="#00FFFF")
        self._style_chart(self.cpu_ax)
        self.cpu_canvas = FigureCanvasTkAgg(self.cpu_fig, master=self.cpu_container)
        self.cpu_canvas_widget = self.cpu_canvas.get_tk_widget()
        self.cpu_canvas_widget.pack(expand=True, fill="both")

        self.cpu_ring = ctk.CTkProgressBar(self.cpu_container, width=200, progress_color="#00FFFF")
        self.cpu_ring.set(0.0)

        # === RAM Frame ===
        self.ram_frame = ctk.CTkFrame(self, corner_radius=15)
        self.ram_frame.grid(row=0, column=1, padx=20, pady=20, sticky="nsew")

        self.ram_title = ctk.CTkLabel(self.ram_frame, text="RAM Usage", font=("Segoe UI", 18, "bold"))
        self.ram_title.pack(pady=(15, 5))

        self.ram_value = ctk.CTkLabel(self.ram_frame, text="--%", font=("Segoe UI", 24))
        self.ram_value.pack(pady=(0, 10))

        self.ram_container = ctk.CTkFrame(self.ram_frame)
        self.ram_container.pack(expand=True, fill="both", padx=10, pady=10)

        self.ram_fig, self.ram_ax = plt.subplots(figsize=(5, 2.5))
        self.ram_line, = self.ram_ax.plot(self.x_data, self.ram_data, color="#FF00FF")
        self._style_chart(self.ram_ax)
        self.ram_canvas = FigureCanvasTkAgg(self.ram_fig, master=self.ram_container)
        self.ram_canvas_widget = self.ram_canvas.get_tk_widget()
        self.ram_canvas_widget.pack(expand=True, fill="both")

        self.ram_ring = ctk.CTkProgressBar(self.ram_container, width=200, progress_color="#FF00FF")
        self.ram_ring.set(0.0)

        # === Footer ===
        cpu_model = platform.processor()
        total_ram = round(psutil.virtual_memory().total / 1e9, 1)
        self.footer = ctk.CTkLabel(
            self, text=f"{cpu_model} | {total_ram} GB RAM",
            font=("Segoe UI", 12), text_color="#AAAAAA"
        )
        self.footer.grid(row=1, column=0, columnspan=2, pady=(0, 10))

        self.update_stats()

    def _style_chart(self, ax):
        ax.set_ylim(0, 100)
        ax.set_xlim(self.x_data[0], self.x_data[-1])
        ax.set_xticks([])
        ax.set_yticks([0, 25, 50, 75, 100])
        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False)
        ax.grid(True, linestyle='--', alpha=0.5)

    def on_resize(self, event):
        if event.widget == self:
            if event.width < 1200 and self.use_chart:
                self.use_chart = False
                self.cpu_canvas_widget.pack_forget()
                self.ram_canvas_widget.pack_forget()
                self.cpu_ring.pack(pady=20)
                self.ram_ring.pack(pady=20)
            elif event.width >= 1200 and not self.use_chart:
                self.use_chart = True
                self.cpu_ring.pack_forget()
                self.ram_ring.pack_forget()
                self.cpu_canvas_widget.pack(expand=True, fill="both")
                self.ram_canvas_widget.pack(expand=True, fill="both")

    def update_stats(self):
        cpu_percent = psutil.cpu_percent()
        ram_percent = psutil.virtual_memory().percent

        self.cpu_data.append(cpu_percent)
        self.ram_data.append(ram_percent)

        self.cpu_value.configure(text=f"{cpu_percent:.1f}%")
        self.ram_value.configure(text=f"{ram_percent:.1f}%")

        if self.use_chart:
            self.cpu_line.set_ydata(self.cpu_data)
            self.cpu_canvas.draw()
            self.ram_line.set_ydata(self.ram_data)
            self.ram_canvas.draw()
        else:
            self.cpu_ring.set(cpu_percent / 100)
            self.ram_ring.set(ram_percent / 100)

        self.after(1000, self.update_stats)


if __name__ == "__main__":
    app = SystemMonitorApp()
    app.mainloop()
