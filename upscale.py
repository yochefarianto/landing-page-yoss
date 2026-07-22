import os
import glob
from PIL import Image

assets_dir = 'assets'
target_resolution = 3840

def process_image(filepath):
    try:
        img = Image.open(filepath)
        w, h = img.size
        # Only upscale if it's smaller than 4K
        if max(w, h) < target_resolution:
            scale = target_resolution / float(max(w, h))
            new_w = int(w * scale)
            new_h = int(h * scale)
            print(f"Upscaling {filepath} from {w}x{h} to {new_w}x{new_h}...")
            # Use LANCZOS for high quality upscaling
            resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            resized_img.save(filepath, quality=95)
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

image_files = glob.glob(os.path.join(assets_dir, '*.png')) + \
              glob.glob(os.path.join(assets_dir, '*.jpg')) + \
              glob.glob(os.path.join(assets_dir, '*.jpeg'))

for file in image_files:
    process_image(file)

print("Upscaling complete!")
