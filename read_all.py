import os

pdf_dir = r"c:\Users\bekir\Masaüstü\Nesne çalisma sitesi\pdf_texts"
output = r"c:\Users\bekir\Masaüstü\Nesne çalisma sitesi\all_content.txt"

files = sorted(os.listdir(pdf_dir))
with open(output, "w", encoding="utf-8") as out:
    for f in files:
        path = os.path.join(pdf_dir, f)
        with open(path, "r", encoding="utf-8") as inp:
            content = inp.read()
        out.write(f"\n{'='*80}\n")
        out.write(f"FILE: {f}\n")
        out.write(f"{'='*80}\n")
        out.write(content)
        out.write("\n")
        
print("Done! All content merged.")
