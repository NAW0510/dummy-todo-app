# 📚 Panduan Git & GitHub — My Todo App
> Berdasarkan materi "Git & Github — Biar Ngodingnya Jago" (Raion Community)

---

## 📁 Struktur Project

```
dummy-todo-app/
├── index.html      ← Tampilan utama Todo App
├── style.css       ← Styling
├── app.js          ← Logika JavaScript
├── demo_git.sh     ← Script demo interaktif (jalankan ini!)
└── PANDUAN.md      ← Panduan ini
```

---

## 🚀 Cara Menjalankan Demo

```bash
# 1. Buka terminal di folder ini
# 2. Jalankan script demo:
bash demo_git.sh
```

Script akan memandu kamu step by step mempraktikkan semua command Git.

---

## 🛠️ Persiapan Awal (Satu Kali)

Sebelum mulai pakai Git, konfigurasi identitas kamu:

```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"

# Cek konfigurasi:
git config --list
```

---

## 📌 BAGIAN 1: Main Git Command (Local)

### 1. `git init` — Inisialisasi Repository

Mengaktifkan Git di folder project. Folder `.git/` tersembunyi akan terbuat.

```bash
git init
```

**Kapan dipakai:** Saat memulai project baru dari awal.

---

### 2. `git add` — Staging Perubahan

Memilih file mana yang akan dimasukkan ke commit berikutnya.

```bash
# Tambah file tertentu:
git add index.html
git add style.css app.js

# Tambah semua file sekaligus:
git add .

# Cek status staging:
git status
```

**Analogi:** Seperti memasukkan barang ke koper sebelum berangkat.

---

### 3. `git commit -m "pesan"` — Menyimpan Snapshot

Menyimpan semua perubahan yang sudah di-staging dengan pesan deskriptif.

```bash
git commit -m "feat: initial commit - struktur dasar Todo App"
git commit -m "style: update warna button"
git commit -m "fix: perbaiki bug deleteTodo"
```

**Tips pesan commit yang baik:**
- `feat:` → fitur baru
- `fix:` → perbaikan bug
- `style:` → perubahan tampilan
- `docs:` → perubahan dokumentasi
- `refactor:` → refaktor kode

**Analogi:** Seperti menyimpan file Word dengan nama versi yang jelas.

---

### 4. `git log` — Melihat Riwayat Commit

```bash
# Lengkap:
git log

# Ringkas (satu baris per commit):
git log --oneline

# Tampilan grafis branch:
git log --oneline --graph --all
```

Setiap commit punya **hash ID** unik (contoh: `a3f2c91`).

---

### 5. `git checkout <commit_id>` — Time Travel ke Checkpoint

Kembali ke kondisi kode di commit tertentu.

```bash
# Lihat dulu hash commit yang dituju:
git log --oneline

# Pindah ke commit tertentu:
git checkout a3f2c91

# Kembali ke branch terbaru:
git checkout main
```

⚠️ **Detached HEAD State:** Saat checkout ke commit tertentu, kamu berada di mode "detached HEAD". Jangan buat commit baru di sini kecuali kamu buat branch baru dari sini.

---

## 📌 BAGIAN 2: Branch

### 6. `git branch` — Membuat & Melihat Branch

```bash
# Lihat semua branch (* = branch aktif):
git branch

# Buat branch baru:
git branch feature/dark-mode
git branch fix/bug-delete
git branch hotfix/login

# Pindah ke branch:
git checkout feature/dark-mode

# Buat branch DAN langsung pindah (shortcut):
git checkout -b feature/dark-mode

# Hapus branch (setelah merge):
git branch -d feature/dark-mode
```

**Tips penamaan branch:**
- `feature/nama-fitur` → untuk fitur baru
- `fix/nama-bug` → untuk perbaikan bug
- `hotfix/nama` → untuk perbaikan darurat
- `release/versi` → untuk persiapan rilis

**Workflow Branch:**
```
main ──●──────────────────────────●── (merge)
        \                        /
         ●──●──● feature/dark-mode
```

---

## 📌 BAGIAN 3: Merge

### 7. `git merge` — Menggabungkan Branch

```bash
# 1. Pastikan kamu di branch tujuan (main):
git checkout main

# 2. Merge branch feature ke main:
git merge feature/dark-mode

# Jika ada konflik, selesaikan dulu lalu:
git add .
git commit -m "resolve: selesaikan merge conflict"
```

**Jenis Merge:**
- **Fast-forward:** Tidak ada divergensi, langsung maju
- **3-way merge:** Ada commit berbeda di kedua branch, Git buat commit merge baru

---

## 📌 BAGIAN 4: Remote (GitHub)

### 8. `git remote add origin` — Hubungkan ke GitHub

```bash
# Hubungkan repo lokal ke repo GitHub:
git remote add origin https://github.com/USERNAME/my-todo-app.git

# Cek remote yang terhubung:
git remote -v
```

**Langkah sebelumnya:** Buat repo kosong dulu di https://github.com/new

---

### 9. `git push` — Kirim ke GitHub

```bash
# Push pertama kali (set upstream):
git push -u origin main

# Push berikutnya (cukup):
git push

# Push branch tertentu:
git push origin feature/dark-mode
```

---

### 10. `git pull` — Ambil dari GitHub

```bash
# Ambil perubahan terbaru dari main:
git pull origin main

# Atau setelah set upstream, cukup:
git pull
```

**Kapan dipakai:** Setiap kali mau mulai kerja, jalankan `git pull` dulu agar kode lokal kamu up-to-date dengan tim.

---

### 11. `git clone` — Download Repo

```bash
# Clone repo orang lain:
git clone https://github.com/USERNAME/nama-repo.git

# Clone ke folder dengan nama tertentu:
git clone https://github.com/USERNAME/nama-repo.git nama-folder-ku
```

**Contoh clone repo Raion Community:**
```bash
git clone https://github.com/Raion-Community/nama-repo.git
```

---

## 📌 BAGIAN 5: Fork & Pull Request (GitHub Web)

### Fork — Copy Repo ke Akun GitHub Kamu

Fork dilakukan di **website GitHub**, bukan terminal.

**Cara Fork:**
1. Buka repo yang mau di-fork di GitHub
2. Klik tombol **Fork** di kanan atas
3. Pilih akun kamu sebagai tujuan
4. Repo akan ter-copy ke akun GitHub kamu
5. Clone fork ke lokal:
   ```bash
   git clone https://github.com/AKUN_KAMU/nama-repo-fork.git
   ```

**Perbedaan Fork vs Clone:**
| | Fork | Clone |
|---|---|---|
| **Ke mana** | Repo baru di akun GitHub kamu | Ke komputer lokal |
| **Hubungan** | Terhubung ke repo asli (bisa PR) | Tidak terhubung |
| **Tujuan** | Kontribusi ke proyek orang | Sekadar download |

---

### Pull Request — Minta Merge ke Repo Asli

Pull Request (PR) dilakukan di **website GitHub**.

**Cara buat Pull Request:**
1. Push perubahan ke branch di repo kamu:
   ```bash
   git push origin nama-branch-kamu
   ```
2. Buka repo tujuan di GitHub
3. Klik **"Compare & pull request"** (muncul otomatis)
4. Isi **judul** dan **deskripsi** PR (jelaskan apa yang kamu ubah)
5. Klik **"Create pull request"**
6. Tunggu review dari pemilik/maintainer repo
7. Kalau disetujui → di-merge ke repo utama! 🎉

---

## 🔑 Cheat Sheet Lengkap

```bash
# ── SETUP ──────────────────────────────────────
git config --global user.name "Nama"
git config --global user.email "email@example.com"

# ── LOCAL ──────────────────────────────────────
git init                         # Init repo baru
git status                       # Cek status file
git add <file>                   # Staging file tertentu
git add .                        # Staging semua file
git commit -m "pesan"            # Simpan commit
git log --oneline                # Riwayat commit ringkas
git checkout <commit_id>         # Balik ke checkpoint
git checkout main                # Kembali ke branch main

# ── BRANCH ─────────────────────────────────────
git branch                       # Lihat semua branch
git branch <nama>                # Buat branch baru
git checkout <nama>              # Pindah branch
git checkout -b <nama>           # Buat + pindah branch
git merge <nama>                 # Merge branch ke aktif
git branch -d <nama>             # Hapus branch

# ── REMOTE ─────────────────────────────────────
git remote add origin <url>      # Hubungkan ke GitHub
git remote -v                    # Cek remote
git push -u origin main          # Push pertama kali
git push                         # Push selanjutnya
git pull                         # Ambil perubahan terbaru
git clone <url>                  # Download repo
```

---

## 📎 Link GitHub Raion Community

- https://github.com/raion-game-programmer
- https://github.com/Raion-Mobile-Engineer
- https://github.com/Raion-Community

---

> 💡 **Tips:** Praktik adalah kunci! Coba buat project kecil kamu sendiri dan push ke GitHub. Semakin sering pakai Git, semakin natural rasanya.
