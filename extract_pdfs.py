import fitz  # PyMuPDF
import os
import glob

pdf_dir = r"c:\Users\bekir\Masaüstü\Nesne çalisma sitesi"
output_dir = os.path.join(pdf_dir, "pdf_texts")
os.makedirs(output_dir, exist_ok=True)

pdf_files = sorted(glob.glob(os.path.join(pdf_dir, "*.pdf")))

for pdf_path in pdf_files:
    basename = os.path.basename(pdf_path)
    print(f"\n{'='*80}")
    print(f"Processing: {basename}")
    print(f"{'='*80}")
    
    doc = fitz.open(pdf_path)
    all_text = []
    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text()
        all_text.append(f"--- Page {page_num+1} ---\n{text}")
    
    full_text = "\n".join(all_text)
    
    # Save to file
    txt_name = basename.replace(".pdf", ".txt")
    txt_path = os.path.join(output_dir, txt_name)
    with open(txt_path, "w", encoding="utf-8") as f:
        f.write(full_text)
    
    print(f"Saved {len(doc)} pages to {txt_name}")
    doc.close()

print("\n\nAll PDFs processed!")
