// ============================================
// NYP Final Çalışma Sitesi - VERİ DOSYASI
// Tüm konular detaylı, sınavda çıkacak her şey var
// ============================================

const TOPICS = [
    // ===== TOPIC 0: UML & Giriş =====
    {
        id: 0, title: "UML & Giriş", subtitle: "Unified Modeling Language ve Temel Kavramlar",
        content: [
            { title: "📐 UML Nedir?", body: `<p><strong>UML (Unified Modeling Language)</strong>, yazılım sistemlerinin tasarımını görselleştirmek için kullanılan genel amaçlı modelleme dilidir. 1995'te geliştirilmiştir.</p>
<ul><li>Yazılı bir dil <strong>değildir</strong>, grafiksel gösterimler kullanır</li><li>14 çeşit UML türü vardır: <strong>Yapısal (Structural)</strong> ve <strong>Davranışsal (Behavioral)</strong> olmak üzere 2 gruba ayrılır</li><li>Class Diagram, <strong>Structural Diagram</strong> altında bulunur</li><li>Farklı programlama dilleri kullanan geliştiriciler arasında <strong>ortak bir dil</strong> oluşturur</li></ul>`},
            { title: "🏗️ UML Class Diagram Yapısı", body: `<p>Class diyagramları <strong>3 bölümden</strong> oluşur:</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:10px;border:1px solid var(--border);text-align:left">Bölüm</th><th style="padding:10px;border:1px solid var(--border)">İçerik</th></tr>
<tr><td style="padding:10px;border:1px solid var(--border)">Üst</td><td style="padding:10px;border:1px solid var(--border)">Sınıf Adı</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border)">Orta</td><td style="padding:10px;border:1px solid var(--border)">Attributes (Alanlar/Özellikler)</td></tr>
<tr><td style="padding:10px;border:1px solid var(--border)">Alt</td><td style="padding:10px;border:1px solid var(--border)">Methods (Metotlar)</td></tr></table>
<p><strong>Erişim Belirleyiciler (Access Modifiers):</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Sembol</th><th style="padding:8px;border:1px solid var(--border)">C# Karşılığı</th><th style="padding:8px;border:1px solid var(--border)">Açıklama</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border);text-align:center;font-weight:700">-</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">private</span></td><td style="padding:8px;border:1px solid var(--border)">Sadece sınıf içinden</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);text-align:center;font-weight:700">+</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">public</span></td><td style="padding:8px;border:1px solid var(--border)">Herkese açık</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);text-align:center;font-weight:700">#</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">protected</span></td><td style="padding:8px;border:1px solid var(--border)">Sınıf + türeyen sınıflar</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border);text-align:center;font-weight:700">~</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">internal</span></td><td style="padding:8px;border:1px solid var(--border)">Aynı proje içinden</td></tr></table>
<p><strong>Özel gösterimler:</strong> <span class="keyword">{readOnly}</span> → readonly, <strong>altı çizili</strong> → static</p>`},
            { title: "🔗 UML İlişki Türleri", body: `<ul>
<li><strong>Inheritance (Kalıtım):</strong> Üçgen başlı ok → alt sınıftan üst sınıfa doğru</li>
<li><strong>Composition (Bileşim):</strong> Dolu elmas → bir sınıf başka sınıfı alan olarak kullanır</li>
<li><strong>Interface:</strong> Noktalı çizgi ile sınıfa bağlanır</li>
<li><strong>Nested Class:</strong> İçinde artı işareti olan daire ile gösterilir</li>
<li><strong>Enumeration:</strong> &laquo;enumeration&raquo; flag'i ile gösterilir</li></ul>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Namespace: Sınıfları gruplamak için</span>
<span class="code-keyword">using</span> System;

<span class="code-keyword">namespace</span> <span class="code-type">MyApp</span>
{
    <span class="code-keyword">public enum</span> <span class="code-type">Cinsiyet</span> { Erkek, Kadin }

    <span class="code-keyword">public abstract class</span> <span class="code-type">Person</span>
    {
        <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
        <span class="code-keyword">public</span> <span class="code-type">Cinsiyet</span> Gender { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
        <span class="code-keyword">public abstract void</span> <span class="code-method">DoWork</span>();
    }
}</pre></div>`}
        ]
    },

    // ===== TOPIC 1: Kontrol İfadeleri 1 =====
    {
        id: 1, title: "Kontrol İfadeleri 1", subtitle: "if/else, while, Operatörler, Tip Dönüşümleri",
        content: [
            { title: "🔀 if / if-else / Nested if-else", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Basit if</span>
<span class="code-keyword">if</span> (grade >= <span class="code-number">60</span>)
    Console.WriteLine(<span class="code-string">"Passed"</span>);

<span class="code-comment">// if-else</span>
<span class="code-keyword">if</span> (grade >= <span class="code-number">60</span>)
    Console.WriteLine(<span class="code-string">"Passed"</span>);
<span class="code-keyword">else</span>
    Console.WriteLine(<span class="code-string">"Failed"</span>);

<span class="code-comment">// Nested if-else (iç içe)</span>
<span class="code-keyword">if</span> (grade >= <span class="code-number">90</span>)
    Console.WriteLine(<span class="code-string">"A"</span>);
<span class="code-keyword">else if</span> (grade >= <span class="code-number">80</span>)
    Console.WriteLine(<span class="code-string">"B"</span>);
<span class="code-keyword">else if</span> (grade >= <span class="code-number">70</span>)
    Console.WriteLine(<span class="code-string">"C"</span>);
<span class="code-keyword">else if</span> (grade >= <span class="code-number">60</span>)
    Console.WriteLine(<span class="code-string">"D"</span>);
<span class="code-keyword">else</span>
    Console.WriteLine(<span class="code-string">"F"</span>);

<span class="code-comment">// Koşullu (ternary) operatör (?:)</span>
Console.WriteLine(grade >= <span class="code-number">60</span> ? <span class="code-string">"Passed"</span> : <span class="code-string">"Failed"</span>);</pre></div>
<div class="important-box">Birden fazla satır çalıştırmak için süslü parantez <span class="keyword">{}</span> (block) kullanılmalı. Aksi halde sadece ilk satır if'e bağlıdır!</div>`},
            { title: "🔄 while Döngüleri", body: `<p><strong>Sayaç kontrollü (Counter-controlled / Definite):</strong> Tekrar sayısı bilinir.</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">int</span> counter = <span class="code-number">1</span>;
<span class="code-keyword">int</span> total = <span class="code-number">0</span>;

<span class="code-keyword">while</span> (counter <= <span class="code-number">10</span>)
{
    Console.Write(<span class="code-string">"Not girin: "</span>);
    <span class="code-keyword">int</span> grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
    total += grade;
    counter++;
}

<span class="code-keyword">double</span> average = (<span class="code-keyword">double</span>)total / <span class="code-number">10</span>; <span class="code-comment">// Cast ile double bölme</span></pre></div>
<p><strong>Nöbetçi kontrollü (Sentinel-controlled / Indefinite):</strong> Tekrar sayısı bilinmez, özel değerle biter.</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">int</span> total = <span class="code-number">0</span>, count = <span class="code-number">0</span>;
Console.Write(<span class="code-string">"Not girin (-1 çıkış): "</span>);
<span class="code-keyword">int</span> grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());

<span class="code-keyword">while</span> (grade != -<span class="code-number">1</span>)
{
    total += grade;
    count++;
    Console.Write(<span class="code-string">"Not girin (-1 çıkış): "</span>);
    grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
}</pre></div>
<div class="important-box"><strong>Integer bölme:</strong> <code>7 / 2 = 3</code> (kesirli kısım kaybolur!). Kesirli sonuç için explicit cast kullanın: <code>(double)7 / 2 = 3.5</code></div>`},
            { title: "📊 Bileşik Atama ve Varsayılan Değerler", body: `<p><strong>Bileşik atama operatörleri:</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Operatör</th><th style="padding:8px;border:1px solid var(--border)">Eşdeğeri</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">c += 3</span></td><td style="padding:8px;border:1px solid var(--border)">c = c + 3</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">c -= 3</span></td><td style="padding:8px;border:1px solid var(--border)">c = c - 3</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">c *= 3</span></td><td style="padding:8px;border:1px solid var(--border)">c = c * 3</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">c /= 3</span></td><td style="padding:8px;border:1px solid var(--border)">c = c / 3</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">c %= 3</span></td><td style="padding:8px;border:1px solid var(--border)">c = c % 3</td></tr></table>
<p><strong>Instance variable varsayılan değerleri:</strong></p>
<ul><li><span class="keyword">int, double, decimal</span> vb. sayısal → <strong>0</strong></li>
<li><span class="keyword">bool</span> → <strong>false</strong></li>
<li>Referans tipleri (string, object, array) → <strong>null</strong></li></ul>
<div class="tip-box">Yerel değişkenlere (local variables) varsayılan değer atanmaz, kullanmadan önce mutlaka değer verilmelidir!</div>`}
        ]
    },

    // ===== TOPIC 2: Kontrol İfadeleri 2 =====
    {
        id: 2, title: "Kontrol İfadeleri 2", subtitle: "for, do-while, switch, break, continue, Mantıksal Operatörler",
        content: [
            { title: "🔁 for Döngüsü", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Temel for döngüsü</span>
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">1</span>; i <= <span class="code-number">10</span>; i++)
{
    Console.Write($<span class="code-string">"{i} "</span>);
}
<span class="code-comment">// Çıktı: 1 2 3 4 5 6 7 8 9 10</span>

<span class="code-comment">// Çift sayıları toplama</span>
<span class="code-keyword">int</span> total = <span class="code-number">0</span>;
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">2</span>; i <= <span class="code-number">20</span>; i += <span class="code-number">2</span>)
    total += i;  <span class="code-comment">// 2+4+6+...+20 = 110</span>

<span class="code-comment">// Math.Pow ile bileşik faiz</span>
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> year = <span class="code-number">1</span>; year <= <span class="code-number">10</span>; year++)
{
    <span class="code-keyword">decimal</span> amount = <span class="code-number">1000</span> * (<span class="code-keyword">decimal</span>)Math.Pow(<span class="code-number">1.05</span>, year);
    Console.WriteLine($<span class="code-string">"{year,4}{amount,20:C}"</span>);
    <span class="code-comment">// {year,4} → 4 karakter genişlik, sağa hizalı</span>
    <span class="code-comment">// {amount,20:C} → 20 karakter, para formatı</span>
}</pre></div>
<div class="tip-box"><span class="keyword">Math.Pow(x, y)</span> → x üzeri y hesaplar. Static metottur, <code>Math.Pow(2, 10) = 1024</code></div>`},
            { title: "🔃 do-while ve switch", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// do-while: Koşul SONDA kontrol edilir, en az 1 kez çalışır</span>
<span class="code-keyword">int</span> counter = <span class="code-number">1</span>;
<span class="code-keyword">do</span>
{
    Console.WriteLine(counter);
    counter++;
} <span class="code-keyword">while</span> (counter <= <span class="code-number">10</span>);

<span class="code-comment">// switch - birden fazla case aynı bloğu paylaşabilir</span>
<span class="code-keyword">switch</span> (grade / <span class="code-number">10</span>)
{
    <span class="code-keyword">case</span> <span class="code-number">10</span>:
    <span class="code-keyword">case</span> <span class="code-number">9</span>:
        Console.WriteLine(<span class="code-string">"A"</span>);
        <span class="code-keyword">break</span>;
    <span class="code-keyword">case</span> <span class="code-number">8</span>:
        Console.WriteLine(<span class="code-string">"B"</span>);
        <span class="code-keyword">break</span>;
    <span class="code-keyword">default</span>:
        Console.WriteLine(<span class="code-string">"F"</span>);
        <span class="code-keyword">break</span>;  <span class="code-comment">// C#'da break ZORUNLU!</span>
}</pre></div>
<div class="important-box">C#'da her case bloğunda <span class="keyword">break</span> zorunludur (C/C++'dan farklı olarak fall-through yoktur).</div>`},
            { title: "⏭️ break ve continue", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// break: Döngüden tamamen çıkar</span>
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">1</span>; i <= <span class="code-number">10</span>; i++)
{
    <span class="code-keyword">if</span> (i == <span class="code-number">5</span>) <span class="code-keyword">break</span>;
    Console.Write($<span class="code-string">"{i} "</span>);
}
<span class="code-comment">// Çıktı: 1 2 3 4</span>

<span class="code-comment">// continue: Kalan kodu atla, sonraki iterasyona geç</span>
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">1</span>; i <= <span class="code-number">10</span>; i++)
{
    <span class="code-keyword">if</span> (i % <span class="code-number">2</span> == <span class="code-number">0</span>) <span class="code-keyword">continue</span>;
    Console.Write($<span class="code-string">"{i} "</span>);
}
<span class="code-comment">// Çıktı: 1 3 5 7 9 (çift sayılar atlanır)</span></pre></div>`},
            { title: "🧮 Mantıksal Operatörler (ÖNEMLİ!)", body: `<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Operatör</th><th style="padding:8px;border:1px solid var(--border)">Ad</th><th style="padding:8px;border:1px solid var(--border)">Short-circuit?</th><th style="padding:8px;border:1px solid var(--border)">Açıklama</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">&&</span></td><td style="padding:8px;border:1px solid var(--border)">Conditional AND</td><td style="padding:8px;border:1px solid var(--border)">✅ Evet</td><td style="padding:8px;border:1px solid var(--border)">İlk false ise ikinciye bakmaz</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">||</span></td><td style="padding:8px;border:1px solid var(--border)">Conditional OR</td><td style="padding:8px;border:1px solid var(--border)">✅ Evet</td><td style="padding:8px;border:1px solid var(--border)">İlk true ise ikinciye bakmaz</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">&</span></td><td style="padding:8px;border:1px solid var(--border)">Boolean AND</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">Her iki tarafı da değerlendirir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">|</span></td><td style="padding:8px;border:1px solid var(--border)">Boolean OR</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">Her iki tarafı da değerlendirir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">^</span></td><td style="padding:8px;border:1px solid var(--border)">XOR</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">Sadece biri true ise true</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">!</span></td><td style="padding:8px;border:1px solid var(--border)">NOT</td><td style="padding:8px;border:1px solid var(--border)">-</td><td style="padding:8px;border:1px solid var(--border)">Değeri tersine çevirir</td></tr></table>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Short-circuit örneği:</span>
<span class="code-keyword">int</span> x = <span class="code-number">0</span>;
<span class="code-keyword">if</span> (x != <span class="code-number">0</span> && <span class="code-number">10</span> / x > <span class="code-number">2</span>)  <span class="code-comment">// x=0, && short-circuit yapar, 10/x çalışmaz → HATA OLMAZ</span>
<span class="code-keyword">if</span> (x != <span class="code-number">0</span> &  <span class="code-number">10</span> / x > <span class="code-number">2</span>)  <span class="code-comment">// & short-circuit YAPMAZ, 10/x çalışır → DivideByZeroException!</span>

<span class="code-comment">// Side effect örneği:</span>
<span class="code-keyword">bool</span> result = (birthday == <span class="code-keyword">true</span>) | (++age >= <span class="code-number">65</span>);
<span class="code-comment">// | kullanıldığı için ++age HER ZAMAN çalışır</span></pre></div>`}
        ]
    },

    // ===== TOPIC 3: Diziler =====
    {
        id: 3, title: "Diziler", subtitle: "Tek/Çok Boyutlu Diziler, foreach, params, ref/out",
        content: [
            { title: "📊 Dizi Oluşturma ve Başlatma", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 1) new ile oluşturma</span>
<span class="code-keyword">int</span>[] c = <span class="code-keyword">new int</span>[<span class="code-number">12</span>];  <span class="code-comment">// 12 elemanlı, hepsi 0</span>

<span class="code-comment">// 2) Initializer ile oluşturma</span>
<span class="code-keyword">int</span>[] values = { <span class="code-number">32</span>, <span class="code-number">27</span>, <span class="code-number">64</span>, <span class="code-number">18</span>, <span class="code-number">95</span> };  <span class="code-comment">// 5 elemanlı</span>

<span class="code-comment">// 3) İki adımda</span>
<span class="code-keyword">int</span>[] arr;
arr = <span class="code-keyword">new int</span>[<span class="code-number">5</span>];  <span class="code-comment">// Boyut değişken olabilir</span>

<span class="code-comment">// Dizi boyutu: .Length property</span>
Console.WriteLine(values.Length);  <span class="code-comment">// 5</span>

<span class="code-comment">// Dizi yeniden boyutlandırma</span>
Array.Resize(<span class="code-keyword">ref</span> values, <span class="code-number">10</span>);  <span class="code-comment">// Yeni dizi oluşturur, eski içeriği kopyalar</span></pre></div>
<div class="important-box">Diziler <strong>referans tipidir</strong>. <span class="keyword">new</span> ile oluşturulur. Varsayılan değerler: sayısal→0, bool→false, referans→null. İndeksler <strong>0'dan</strong> başlar!</div>`},
            { title: "🔄 foreach Döngüsü", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">int</span>[] numbers = { <span class="code-number">87</span>, <span class="code-number">68</span>, <span class="code-number">94</span>, <span class="code-number">100</span>, <span class="code-number">83</span> };

<span class="code-comment">// foreach ile dizi elemanlarını okuma</span>
<span class="code-keyword">foreach</span> (<span class="code-keyword">int</span> number <span class="code-keyword">in</span> numbers)
{
    Console.Write($<span class="code-string">"{number} "</span>);
}
<span class="code-comment">// Çıktı: 87 68 94 100 83</span></pre></div>
<div class="important-box"><span class="keyword">foreach</span> döngüsünde iteration variable <strong>read-only</strong>'dir! Dizi elemanlarını foreach ile değiştiremezsiniz. Değiştirmek için <span class="keyword">for</span> döngüsü kullanın.</div>`},
            { title: "📐 Çok Boyutlu Diziler", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// ═══ RECTANGULAR (Dikdörtgensel) DİZİ ═══</span>
<span class="code-comment">// Her satır aynı sayıda sütuna sahip</span>
<span class="code-keyword">int</span>[,] rect = <span class="code-keyword">new int</span>[<span class="code-number">3</span>, <span class="code-number">4</span>];  <span class="code-comment">// 3 satır, 4 sütun</span>
<span class="code-keyword">int</span>[,] b = { {<span class="code-number">1</span>, <span class="code-number">2</span>}, {<span class="code-number">3</span>, <span class="code-number">4</span>} };     <span class="code-comment">// 2x2 dizi</span>
<span class="code-keyword">int</span> val = b[<span class="code-number">1</span>, <span class="code-number">0</span>];  <span class="code-comment">// satır 1, sütun 0 → 3</span>

<span class="code-comment">// ═══ JAGGED (Düzensiz) DİZİ ═══</span>
<span class="code-comment">// Her satır farklı sayıda elemana sahip olabilir</span>
<span class="code-keyword">int</span>[][] jagged = {
    <span class="code-keyword">new int</span>[] { <span class="code-number">1</span>, <span class="code-number">2</span> },
    <span class="code-keyword">new int</span>[] { <span class="code-number">3</span> },
    <span class="code-keyword">new int</span>[] { <span class="code-number">4</span>, <span class="code-number">5</span>, <span class="code-number">6</span> }
};
<span class="code-keyword">int</span> val2 = jagged[<span class="code-number">2</span>][<span class="code-number">1</span>];  <span class="code-comment">// satır 2, sütun 1 → 5</span>

<span class="code-comment">// Jagged dizi adım adım oluşturma</span>
<span class="code-keyword">int</span>[][] c = <span class="code-keyword">new int</span>[<span class="code-number">2</span>][];
c[<span class="code-number">0</span>] = <span class="code-keyword">new int</span>[<span class="code-number">5</span>];  <span class="code-comment">// satır 0: 5 eleman</span>
c[<span class="code-number">1</span>] = <span class="code-keyword">new int</span>[<span class="code-number">3</span>];  <span class="code-comment">// satır 1: 3 eleman</span></pre></div>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)"></th><th style="padding:8px;border:1px solid var(--border)">Rectangular</th><th style="padding:8px;border:1px solid var(--border)">Jagged</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Tanım</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">int[,]</span></td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">int[][]</span></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Erişim</td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">a[satır, sütun]</span></td><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">a[satır][sütun]</span></td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Satır uzunluğu</td><td style="padding:8px;border:1px solid var(--border)">Hepsi aynı</td><td style="padding:8px;border:1px solid var(--border)">Farklı olabilir</td></tr></table>`},
            { title: "📤 params, ref, out ve Dizi Geçirme", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// params: Değişken sayıda argüman (sadece son parametre!)</span>
<span class="code-keyword">static double</span> <span class="code-method">Average</span>(<span class="code-keyword">params double</span>[] values)
{
    <span class="code-keyword">double</span> total = <span class="code-number">0</span>;
    <span class="code-keyword">foreach</span> (<span class="code-keyword">double</span> v <span class="code-keyword">in</span> values)
        total += v;
    <span class="code-keyword">return</span> total / values.Length;
}

<span class="code-comment">// Kullanım: Average(1.0, 2.0, 3.0) veya Average(dizi)</span>

<span class="code-comment">// ref: Değişkenin kendisini (referansını) gönderir</span>
<span class="code-keyword">static void</span> <span class="code-method">Swap</span>(<span class="code-keyword">ref int</span> a, <span class="code-keyword">ref int</span> b)
{
    <span class="code-keyword">int</span> temp = a;
    a = b;
    b = temp;
}

<span class="code-comment">// out: Metot içinde değer atanması ZORUNLU</span>
<span class="code-keyword">static void</span> <span class="code-method">Divide</span>(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b, <span class="code-keyword">out int</span> result, <span class="code-keyword">out int</span> remainder)
{
    result = a / b;
    remainder = a % b;
}</pre></div>
<div class="tip-box"><strong>Dizi bir referans tipidir.</strong> Metoda dizi gönderildiğinde referansın kopyası gönderilir (dizi kopyalanmaz). Yani metot içinde dizi elemanları değiştirilirse orijinal dizi de değişir!</div>`}
        ]
    },

    // ===== TOPIC 4: Sınıflar ve Nesneler =====
    {
        id: 4, title: "Sınıflar ve Nesneler", subtitle: "Constructor, this, static, readonly, const, Composition, List<T>, Exception Handling",
        content: [
            { title: "🏛️ Sınıf Temelleri, Property ve Erişim Belirleyiciler", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time1</span>
{
    <span class="code-comment">// Auto-implemented property'ler</span>
    <span class="code-keyword">public int</span> Hour { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Minute { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Second { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// Getter-only auto-property (readonly implicitly)</span>
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; }

    <span class="code-comment">// Manuel property with validation</span>
    <span class="code-keyword">private int</span> hour;
    <span class="code-keyword">public int</span> HourManual
    {
        <span class="code-keyword">get</span> { <span class="code-keyword">return</span> hour; }
        <span class="code-keyword">set</span>
        {
            <span class="code-keyword">if</span> (value >= <span class="code-number">0</span> && value < <span class="code-number">24</span>)
                hour = value;
            <span class="code-keyword">else</span>
                <span class="code-keyword">throw new</span> <span class="code-type">ArgumentOutOfRangeException</span>();
        }
    }
}</pre></div>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Modifier</th><th style="padding:8px;border:1px solid var(--border)">Erişim</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">public</span></td><td style="padding:8px;border:1px solid var(--border)">Her yerden</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">private</span></td><td style="padding:8px;border:1px solid var(--border)">Sadece sınıf içinden</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">protected</span></td><td style="padding:8px;border:1px solid var(--border)">Sınıf + türeyen sınıflar</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">internal</span></td><td style="padding:8px;border:1px solid var(--border)">Aynı proje (assembly) içinden</td></tr></table>`},
            { title: "🔧 Constructor, this ve Constructor Zincirleme", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time2</span>
{
    <span class="code-keyword">private int</span> hour, minute, second;

    <span class="code-comment">// Parametresiz constructor → diğer constructor'ı çağırır</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>() : <span class="code-keyword">this</span>(<span class="code-number">0</span>, <span class="code-number">0</span>, <span class="code-number">0</span>) { }

    <span class="code-comment">// Tek parametreli</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-keyword">int</span> hour) : <span class="code-keyword">this</span>(hour, <span class="code-number">0</span>, <span class="code-number">0</span>) { }

    <span class="code-comment">// Tam parametreli constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-keyword">int</span> hour, <span class="code-keyword">int</span> minute, <span class="code-keyword">int</span> second)
    {
        <span class="code-keyword">this</span>.hour = hour;       <span class="code-comment">// this. ile instance variable'a erişim</span>
        <span class="code-keyword">this</span>.minute = minute;   <span class="code-comment">// parametre ile alanı ayırt eder</span>
        <span class="code-keyword">this</span>.second = second;
    }

    <span class="code-comment">// Kopya constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-type">Time2</span> time)
        : <span class="code-keyword">this</span>(time.hour, time.minute, time.second) { }
}</pre></div>
<div class="important-box"><strong>Constructor Kuralları:</strong>
<ul><li>Constructor'lar <strong>kalıtılmaz!</strong></li>
<li>Hiç constructor yazmazsanız → compiler <strong>varsayılan parametresiz constructor</strong> oluşturur</li>
<li>En az 1 constructor yazarsanız → compiler varsayılan constructor <strong>oluşturmaz!</strong></li>
<li><span class="keyword">this(...)</span> ile aynı sınıftaki başka constructor çağrılır (constructor chaining)</li></ul></div>`},
            { title: "⚡ static Üyeler", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-comment">// static: Tüm nesneler tarafından PAYLAŞILIR</span>
    <span class="code-keyword">private static int</span> Count { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; } = <span class="code-number">0</span>;

    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; }

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> name)
    {
        Name = name;
        ++Count;  <span class="code-comment">// Her nesne oluşturulduğunda artır</span>
    }

    <span class="code-comment">// static metot - nesne olmadan çağrılır</span>
    <span class="code-keyword">public static int</span> <span class="code-method">GetCount</span>() => Count;
}

<span class="code-comment">// Kullanım:</span>
<span class="code-keyword">var</span> e1 = <span class="code-keyword">new</span> <span class="code-type">Employee</span>(<span class="code-string">"Ali"</span>);
<span class="code-keyword">var</span> e2 = <span class="code-keyword">new</span> <span class="code-type">Employee</span>(<span class="code-string">"Veli"</span>);
Console.WriteLine(Employee.GetCount());  <span class="code-comment">// 2 (sınıf adıyla çağrılır)</span></pre></div>
<div class="important-box"><strong>static metotlar:</strong>
<ul><li><span class="keyword">this</span> anahtar kelimesini <strong>kullanamaz</strong></li>
<li>Non-static üyelere <strong>doğrudan erişemez</strong></li>
<li>Nesne olmadan çağrılabilir: <code>ClassName.Method()</code></li>
<li>Örnek: <code>Math.Pow()</code>, <code>Console.WriteLine()</code></li></ul></div>`},
            { title: "🔒 const, readonly ve Getter-only Property", body: `<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Özellik</th><th style="padding:8px;border:1px solid var(--border)"><span class="keyword">const</span></th><th style="padding:8px;border:1px solid var(--border)"><span class="keyword">readonly</span></th><th style="padding:8px;border:1px solid var(--border)">Getter-only Property</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Atanma zamanı</td><td style="padding:8px;border:1px solid var(--border)">Derleme zamanı</td><td style="padding:8px;border:1px solid var(--border)">Constructor'da</td><td style="padding:8px;border:1px solid var(--border)">Constructor'da</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Sonra değişir mi?</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">İmplicit static?</td><td style="padding:8px;border:1px solid var(--border)">✅ Evet</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td><td style="padding:8px;border:1px solid var(--border)">❌ Hayır</td></tr></table>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">const double</span> PI = <span class="code-number">3.14159</span>;  <span class="code-comment">// Derleme zamanında atanmalı</span>
<span class="code-keyword">readonly int</span> maxSize;        <span class="code-comment">// Constructor'da atanabilir</span>
<span class="code-keyword">public string</span> Id { <span class="code-keyword">get</span>; }   <span class="code-comment">// Getter-only → implicitly readonly</span></pre></div>`},
            { title: "🧩 Composition (Has-A) ve List<T>", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Composition: Bir sınıf başka sınıf nesnelerini ALAN olarak içerir</span>
<span class="code-keyword">public class</span> <span class="code-type">Date</span>
{
    <span class="code-keyword">public int</span> Month { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public int</span> Day { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public int</span> Year { <span class="code-keyword">get</span>; }
}

<span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public</span> <span class="code-type">Date</span> BirthDate { <span class="code-keyword">get</span>; }  <span class="code-comment">// Employee HAS-A Date</span>
    <span class="code-keyword">public</span> <span class="code-type">Date</span> HireDate { <span class="code-keyword">get</span>; }   <span class="code-comment">// Employee HAS-A Date</span>
}

<span class="code-comment">// ═══ List&lt;T&gt; (Generic koleksiyon) ═══</span>
<span class="code-keyword">var</span> items = <span class="code-keyword">new</span> <span class="code-type">List</span>&lt;<span class="code-keyword">string</span>&gt;{ <span class="code-string">"elma"</span>, <span class="code-string">"armut"</span> };

items.Add(<span class="code-string">"muz"</span>);           <span class="code-comment">// Sona ekle</span>
items.Insert(<span class="code-number">0</span>, <span class="code-string">"çilek"</span>);    <span class="code-comment">// İndekse ekle</span>
items.Remove(<span class="code-string">"armut"</span>);       <span class="code-comment">// Değere göre sil</span>
items.RemoveAt(<span class="code-number">0</span>);           <span class="code-comment">// İndekse göre sil</span>
<span class="code-keyword">bool</span> has = items.Contains(<span class="code-string">"muz"</span>); <span class="code-comment">// Arama</span>
<span class="code-keyword">int</span> count = items.Count;      <span class="code-comment">// Eleman sayısı (Length değil!)</span>
<span class="code-keyword">int</span> cap = items.Capacity;     <span class="code-comment">// Kapasite</span></pre></div>
<div class="tip-box"><span class="keyword">List&lt;T&gt;</span> dinamik boyutludur (diziden farklı olarak). <span class="keyword">Count</span> mevcut eleman sayısı, <span class="keyword">Capacity</span> yeniden boyutlandırma olmadan tutabileceği eleman sayısıdır.</div>`},
            { title: "🛡️ Exception Handling (try-catch)", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">try</span>
{
    Console.Write(<span class="code-string">"Sayı girin: "</span>);
    <span class="code-keyword">int</span> num = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
    <span class="code-keyword">int</span> result = <span class="code-number">100</span> / num;
}
<span class="code-keyword">catch</span> (<span class="code-type">FormatException</span> ex)
{
    Console.WriteLine(<span class="code-string">"Geçersiz format!"</span>);
}
<span class="code-keyword">catch</span> (<span class="code-type">DivideByZeroException</span> ex)
{
    Console.WriteLine(<span class="code-string">"Sıfıra bölünemez!"</span>);
}
<span class="code-keyword">finally</span>
{
    Console.WriteLine(<span class="code-string">"Her durumda çalışır"</span>);
}</pre></div>
<div class="important-box"><span class="keyword">try</span> bloğunda tanımlanan değişkenler <span class="keyword">catch</span> bloğunda erişilemez! (farklı scope)</div>`}
        ]
    },

    // ===== TOPIC 5: Kalıtım (FİNAL AĞIRLIKLI) =====
    {
        id: 5, title: "Kalıtım (Inheritance) 🔥", subtitle: "base, virtual, override, protected — FİNALDE AĞIRLIKLI",
        content: [
            { title: "🧬 Kalıtım Kavramı ve Terminoloji", body: `<p>Kalıtım (Inheritance), mevcut bir sınıfın üyelerini yeni bir sınıfa aktarır. <strong>is-a</strong> ilişkisini temsil eder.</p>
<ul><li><strong>Base class (Taban/Üst sınıf):</strong> Kalıtım veren sınıf</li>
<li><strong>Derived class (Türeyen/Alt sınıf):</strong> Kalıtım alan sınıf</li>
<li><strong>Direct base class:</strong> Doğrudan kalıtım alınan sınıf</li>
<li><strong>Indirect base class:</strong> Hiyerarşide daha yukarıdaki sınıf</li>
<li>Tüm sınıflar doğrudan veya dolaylı olarak <span class="keyword">object</span> sınıfından türer</li></ul>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Taban sınıf</span>
<span class="code-keyword">public class</span> <span class="code-type">CommissionEmployee</span>
{
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public decimal</span> GrossSales { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> CommissionRate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">CommissionEmployee</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last,
        <span class="code-keyword">decimal</span> sales, <span class="code-keyword">decimal</span> rate)
    {
        FirstName = first;
        LastName = last;
        GrossSales = sales;
        CommissionRate = rate;
    }

    <span class="code-comment">// virtual: Türeyen sınıflarda override edilebilir</span>
    <span class="code-keyword">public virtual decimal</span> <span class="code-method">Earnings</span>()
        => GrossSales * CommissionRate;

    <span class="code-comment">// object.ToString() zaten virtual, override ediyoruz</span>
    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"{FirstName} {LastName}\n"</span>
         + $<span class="code-string">"gross sales: {GrossSales:C}\n"</span>
         + $<span class="code-string">"commission rate: {CommissionRate:F2}"</span>;
}</pre></div>`},
            { title: "🔗 Türeyen Sınıf: base Anahtar Kelimesi", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// : ile kalıtım alınır</span>
<span class="code-keyword">public class</span> <span class="code-type">BasePlusCommissionEmployee</span> : <span class="code-type">CommissionEmployee</span>
{
    <span class="code-keyword">public decimal</span> BaseSalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// base() ile taban sınıf constructor'ını çağır</span>
    <span class="code-keyword">public</span> <span class="code-method">BasePlusCommissionEmployee</span>(<span class="code-keyword">string</span> first,
        <span class="code-keyword">string</span> last, <span class="code-keyword">decimal</span> sales, <span class="code-keyword">decimal</span> rate,
        <span class="code-keyword">decimal</span> salary)
        : <span class="code-keyword">base</span>(first, last, sales, rate)  <span class="code-comment">// ← Taban constructor çağrısı</span>
    {
        BaseSalary = salary;
    }

    <span class="code-comment">// override: Taban sınıf virtual/abstract metodunu yeniden tanımla</span>
    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>()
        => BaseSalary + <span class="code-keyword">base</span>.Earnings();  <span class="code-comment">// ← Taban metodu çağır</span>

    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"base-salaried {base.ToString()}\n"</span>  <span class="code-comment">// ← Taban ToString</span>
         + $<span class="code-string">"base salary: {BaseSalary:C}"</span>;
}</pre></div>
<div class="important-box"><strong>ÇOK ÖNEMLİ KURALLAR:</strong>
<ul><li><span class="keyword">base(...)</span> ile taban sınıf constructor'ı <strong>mutlaka</strong> çağrılmalı (explicit veya implicit)</li>
<li>Taban sınıfın <span class="keyword">private</span> üyelerine türeyen sınıftan <strong>doğrudan erişilemez!</strong> Public property'ler üzerinden erişilir</li>
<li><span class="keyword">protected</span> üyeler: Sınıf içinden VE türeyen sınıflardan erişilebilir, dışarıdan erişilemez</li>
<li>Constructor'lar <strong>ASLA</strong> kalıtılmaz!</li>
<li>Constructor çağrı sırası: Önce en üstteki taban sınıf, sonra aşağıya doğru</li></ul></div>`},
            { title: "🔑 virtual, override ve Metot İmzası", body: `<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Anahtar Kelime</th><th style="padding:8px;border:1px solid var(--border)">Kullanım Yeri</th><th style="padding:8px;border:1px solid var(--border)">Açıklama</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">virtual</span></td><td style="padding:8px;border:1px solid var(--border)">Taban sınıf</td><td style="padding:8px;border:1px solid var(--border)">Metodu override edilebilir yapar (gövdesi VAR)</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">abstract</span></td><td style="padding:8px;border:1px solid var(--border)">Abstract sınıf</td><td style="padding:8px;border:1px solid var(--border)">Gövdesi YOK, türeyen ZORUNLU override eder</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">override</span></td><td style="padding:8px;border:1px solid var(--border)">Türeyen sınıf</td><td style="padding:8px;border:1px solid var(--border)">Taban sınıf virtual/abstract metodu yeniden tanımlar</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">sealed</span></td><td style="padding:8px;border:1px solid var(--border)">Türeyen sınıf</td><td style="padding:8px;border:1px solid var(--border)">Override edilen metodu daha alt sınıflarda override edilmez yapar</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">new</span></td><td style="padding:8px;border:1px solid var(--border)">Türeyen sınıf</td><td style="padding:8px;border:1px solid var(--border)">Taban sınıf metodu gizler (hiding - tavsiye edilmez)</td></tr></table>
<div class="tip-box"><strong>Override kuralı:</strong> Override eden metot, taban sınıf metodu ile <strong>aynı imzaya</strong> (ad, parametre sayısı/tipleri, dönüş tipi) sahip olmalıdır. <span class="keyword">override</span> modifier'ı, metodu implicitly <span class="keyword">virtual</span> yapar.</div>`},
            { title: "🔗 Constructor Zincirleme Sırası", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">class</span> <span class="code-type">A</span>
{
    <span class="code-keyword">public</span> <span class="code-method">A</span>() { Console.Write(<span class="code-string">"A "</span>); }
}

<span class="code-keyword">class</span> <span class="code-type">B</span> : <span class="code-type">A</span>
{
    <span class="code-keyword">public</span> <span class="code-method">B</span>() { Console.Write(<span class="code-string">"B "</span>); }
}

<span class="code-keyword">class</span> <span class="code-type">C</span> : <span class="code-type">B</span>
{
    <span class="code-keyword">public</span> <span class="code-method">C</span>() { Console.Write(<span class="code-string">"C "</span>); }
}

<span class="code-comment">// new C(); → Çıktı: "A B C"</span>
<span class="code-comment">// Önce en üstteki taban sınıf constructor'ı çalışır!</span></pre></div>
<div class="important-box">Constructor çalışma sırası: Hiyerarşinin <strong>en tepesinden</strong> başlar, aşağıya doğru iner. Yani: object → A → B → C</div>`}
        ]
    },

    // ===== TOPIC 6: Çok Biçimlilik (FİNAL AĞIRLIKLI) =====
    {
        id: 6, title: "Çok Biçimlilik (Polymorphism) 🔥", subtitle: "abstract, sealed, casting, as/is — FİNALDE AĞIRLIKLI",
        content: [
            { title: "🎭 Polimorfizm Kavramı", body: `<p>Polymorphism, aynı taban sınıfı paylaşan farklı türdeki nesnelerin, taban sınıf referansı üzerinden işlenmesidir. Her nesne <strong>kendi versiyonunu</strong> çalıştırır.</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Taban sınıf dizisi ile polimorfik kullanım</span>
<span class="code-type">Employee</span>[] employees = {
    <span class="code-keyword">new</span> <span class="code-type">SalariedEmployee</span>(<span class="code-string">"Ali"</span>, <span class="code-string">"Veli"</span>, <span class="code-number">800</span>),
    <span class="code-keyword">new</span> <span class="code-type">HourlyEmployee</span>(<span class="code-string">"Ayşe"</span>, <span class="code-string">"Kaya"</span>, <span class="code-number">16.75M</span>, <span class="code-number">40</span>),
    <span class="code-keyword">new</span> <span class="code-type">CommissionEmployee</span>(<span class="code-string">"Mehmet"</span>, <span class="code-string">"Can"</span>, <span class="code-number">10000</span>, <span class="code-number">0.06M</span>)
};

<span class="code-comment">// Runtime'da her nesne KENDİ Earnings() metodunu çağırır</span>
<span class="code-keyword">foreach</span> (<span class="code-type">Employee</span> emp <span class="code-keyword">in</span> employees)
{
    Console.WriteLine(emp);            <span class="code-comment">// Polimorfik ToString()</span>
    Console.WriteLine(emp.Earnings()); <span class="code-comment">// Polimorfik Earnings()</span>
}</pre></div>
<div class="tip-box"><strong>Polimorfizmin avantajı:</strong> Yeni alt sınıf eklendiğinde mevcut kodu değiştirmek gerekmez. foreach döngüsü olduğu gibi çalışmaya devam eder → <strong>genişletilebilirlik (extensibility)</strong></div>`},
            { title: "🔷 Abstract Sınıflar ve Metotlar", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public abstract class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; }

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last)
    {
        FirstName = first;
        LastName = last;
    }

    <span class="code-comment">// Abstract metot: Gövdesi YOK!</span>
    <span class="code-keyword">public abstract decimal</span> <span class="code-method">Earnings</span>();

    <span class="code-comment">// Concrete (gövdeli) metot da olabilir</span>
    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"{FirstName} {LastName}"</span>;
}

<span class="code-comment">// ═══ Concrete (somut) sınıflar ═══</span>
<span class="code-keyword">public class</span> <span class="code-type">SalariedEmployee</span> : <span class="code-type">Employee</span>
{
    <span class="code-keyword">public decimal</span> WeeklySalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">SalariedEmployee</span>(<span class="code-keyword">string</span> f, <span class="code-keyword">string</span> l, <span class="code-keyword">decimal</span> s)
        : <span class="code-keyword">base</span>(f, l) { WeeklySalary = s; }

    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>() => WeeklySalary;
}

<span class="code-keyword">public class</span> <span class="code-type">HourlyEmployee</span> : <span class="code-type">Employee</span>
{
    <span class="code-keyword">public decimal</span> Wage { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> Hours { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">HourlyEmployee</span>(<span class="code-keyword">string</span> f, <span class="code-keyword">string</span> l,
        <span class="code-keyword">decimal</span> w, <span class="code-keyword">decimal</span> h) : <span class="code-keyword">base</span>(f, l)
    {
        Wage = w; Hours = h;
    }

    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>()
    {
        <span class="code-keyword">if</span> (Hours <= <span class="code-number">40</span>)
            <span class="code-keyword">return</span> Wage * Hours;
        <span class="code-keyword">else</span>
            <span class="code-keyword">return</span> <span class="code-number">40</span> * Wage + (Hours - <span class="code-number">40</span>) * Wage * <span class="code-number">1.5M</span>;
    }
}</pre></div>
<div class="important-box"><strong>Abstract sınıf kuralları:</strong>
<ul><li><span class="keyword">new</span> ile <strong>oluşturulamaz!</strong> (instantiate edilemez)</li>
<li>Abstract metot/property içeren sınıf <strong>mutlaka abstract</strong> olmalı</li>
<li>Abstract metotlar implicitly <span class="keyword">virtual</span>'dır</li>
<li>Constructor ve static metotlar <strong>abstract/virtual olamaz</strong></li>
<li>Concrete sınıflar tüm abstract üyeleri <strong>override etmek zorunda</strong></li>
<li>Abstract sınıflar constructor tanımlayabilir (türeyen sınıflar base ile çağırır)</li>
<li>Abstract sınıf referansları, concrete türeyen sınıf nesnelerini tutabilir</li></ul></div>`},
            { title: "🔒 sealed Sınıf ve Metot", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// sealed sınıf: Kalıtılamaz (hiçbir sınıf bundan türeyemez)</span>
<span class="code-keyword">public sealed class</span> <span class="code-type">FinalClass</span> { }
<span class="code-comment">// class Child : FinalClass { }  → DERLEME HATASI!</span>
<span class="code-comment">// Örnek: string sınıfı sealed'dır</span>

<span class="code-comment">// sealed metot: Override edilemez (daha alt sınıflarda)</span>
<span class="code-keyword">public class</span> <span class="code-type">B</span> : <span class="code-type">A</span>
{
    <span class="code-keyword">public sealed override void</span> <span class="code-method">Method</span>()
    {
        <span class="code-comment">// A'dan override eder AMA daha alt sınıflar bunu override edemez</span>
    }
}</pre></div>
<ul><li><span class="keyword">private</span> metotlar implicitly sealed'dır</li>
<li><span class="keyword">static</span> metotlar implicitly sealed'dır</li>
<li>sealed metot çağrıları <strong>static binding</strong> ile çözülür (derleme zamanında)</li></ul>`},
            { title: "🔄 Tür Dönüşümleri: Upcasting ve Downcasting", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// ═══ UPCASTING (Güvenli - implicit) ═══</span>
<span class="code-comment">// Türeyen sınıf referansı → Taban sınıf değişkenine</span>
<span class="code-type">Employee</span> emp = <span class="code-keyword">new</span> <span class="code-type">SalariedEmployee</span>(<span class="code-string">"Ali"</span>, <span class="code-string">"V"</span>, <span class="code-number">5000</span>);
<span class="code-comment">// ✅ Her SalariedEmployee bir Employee'dir</span>

<span class="code-comment">// ═══ DOWNCASTING (Tehlikeli - explicit cast gerekli) ═══</span>
<span class="code-comment">// Taban sınıf referansı → Türeyen sınıf değişkenine</span>
<span class="code-type">SalariedEmployee</span> sal = (<span class="code-type">SalariedEmployee</span>)emp;
<span class="code-comment">// ⚠️ Eğer emp gerçekten SalariedEmployee değilse → InvalidCastException!</span>

<span class="code-comment">// ═══ GÜVENLİ DOWNCASTING: as operatörü ═══</span>
<span class="code-type">SalariedEmployee</span> sal2 = emp <span class="code-keyword">as</span> <span class="code-type">SalariedEmployee</span>;
<span class="code-keyword">if</span> (sal2 != <span class="code-keyword">null</span>)
{
    Console.WriteLine(sal2.WeeklySalary);  <span class="code-comment">// Güvenle kullan</span>
}

<span class="code-comment">// ═══ is operatörü ═══</span>
<span class="code-keyword">if</span> (emp <span class="code-keyword">is</span> <span class="code-type">SalariedEmployee</span>)
{
    <span class="code-type">SalariedEmployee</span> s = (<span class="code-type">SalariedEmployee</span>)emp;  <span class="code-comment">// Güvenle cast</span>
}

<span class="code-comment">// ═══ GetType() ═══</span>
Console.WriteLine(emp.GetType());       <span class="code-comment">// SalariedEmployee</span>
Console.WriteLine(emp.GetType().Name);  <span class="code-comment">// SalariedEmployee</span></pre></div>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Atama</th><th style="padding:8px;border:1px solid var(--border)">Sonuç</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Taban → Taban</td><td style="padding:8px;border:1px solid var(--border)">✅ Normal</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Türeyen → Türeyen</td><td style="padding:8px;border:1px solid var(--border)">✅ Normal</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Türeyen → Taban (Upcasting)</td><td style="padding:8px;border:1px solid var(--border)">✅ Güvenli, implicit</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Taban → Türeyen (Downcasting)</td><td style="padding:8px;border:1px solid var(--border)">⚠️ Derleme hatası! Explicit cast gerekir</td></tr></table>`}
        ]
    },

    // ===== TOPIC 7: Arayüzler (FİNAL AĞIRLIKLI) =====
    {
        id: 7, title: "Arayüzler (Interfaces) 🔥", subtitle: "interface, IComparable, IPayable — FİNALDE AĞIRLIKLI",
        content: [
            { title: "🔌 Interface Tanımı ve Kullanımı", body: `<p>Interface, sınıfların <strong>uygulaması gereken</strong> public servisleri (metot ve property) belirtir. Sözleşme (contract) gibi düşünülebilir.</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Interface tanımı - gövde YOK!</span>
<span class="code-keyword">public interface</span> <span class="code-type">IPayable</span>
{
    <span class="code-keyword">decimal</span> <span class="code-method">GetPaymentAmount</span>();  <span class="code-comment">// Sadece imza</span>
}

<span class="code-comment">// Interface uygulayan sınıf</span>
<span class="code-keyword">public class</span> <span class="code-type">Invoice</span> : <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public string</span> PartDescription { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> PricePerItem { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Quantity { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// Interface metodunu UYGULAMAK ZORUNLU</span>
    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>()
        => Quantity * PricePerItem;
}

<span class="code-comment">// Employee sınıfı da IPayable uygulayabilir</span>
<span class="code-keyword">public abstract class</span> <span class="code-type">Employee</span> : <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public abstract decimal</span> <span class="code-method">Earnings</span>();

    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>()
        => Earnings();  <span class="code-comment">// Interface metodu abstract metodu çağırır</span>
}

<span class="code-comment">// ═══ Polimorfik kullanım ═══</span>
<span class="code-type">IPayable</span>[] payables = {
    <span class="code-keyword">new</span> <span class="code-type">Invoice</span>(<span class="code-string">"Vida"</span>, <span class="code-number">2.50M</span>, <span class="code-number">100</span>),
    <span class="code-keyword">new</span> <span class="code-type">SalariedEmployee</span>(<span class="code-string">"Ali"</span>, <span class="code-string">"V"</span>, <span class="code-number">5000</span>)
};

<span class="code-keyword">foreach</span> (<span class="code-type">IPayable</span> p <span class="code-keyword">in</span> payables)
    Console.WriteLine(p.GetPaymentAmount());  <span class="code-comment">// Polimorfik!</span></pre></div>`},
            { title: "📋 Interface vs Abstract Sınıf — Kritik Farklar", body: `<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:10px;border:1px solid var(--border)">Özellik</th><th style="padding:10px;border:1px solid var(--border)">Interface</th><th style="padding:10px;border:1px solid var(--border)">Abstract Sınıf</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Default uygulama</td><td style="padding:8px;border:1px solid var(--border)">❌ Yok</td><td style="padding:8px;border:1px solid var(--border)">✅ Olabilir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Çoklu kalıtım</td><td style="padding:8px;border:1px solid var(--border)">✅ Birden fazla uygulanabilir</td><td style="padding:8px;border:1px solid var(--border)">❌ Sadece bir tane</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Constructor</td><td style="padding:8px;border:1px solid var(--border)">❌ Yok</td><td style="padding:8px;border:1px solid var(--border)">✅ Olabilir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Alanlar (fields)</td><td style="padding:8px;border:1px solid var(--border)">❌ Yok</td><td style="padding:8px;border:1px solid var(--border)">✅ Olabilir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Erişim belirleyici</td><td style="padding:8px;border:1px solid var(--border)">Hepsi public (implicit)</td><td style="padding:8px;border:1px solid var(--border)">Her türlü olabilir</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)">Ne zaman?</td><td style="padding:8px;border:1px solid var(--border)">İlişkisiz sınıflar arasında ortak davranış</td><td style="padding:8px;border:1px solid var(--border)">İlişkili sınıflar için ortak temel</td></tr></table>
<div class="important-box"><strong>C#'da çoklu kalıtım YOKTUR!</strong> Bir sınıf sadece bir sınıftan kalıtım alabilir. Ancak birden fazla interface uygulayabilir. Sıralama: <code>class A : BaseClass, IInterface1, IInterface2</code> (sınıf adı ÖNCE!)</div>`},
            { title: "📊 IComparable<T> ve Sıralama", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">Employee</span>&gt;
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> Salary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public</span> <span class="code-type">DateTime</span> BirthDate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// IComparable&lt;T&gt; uygulaması - ZORUNLU</span>
    <span class="code-keyword">public int</span> <span class="code-method">CompareTo</span>(<span class="code-type">Employee</span> other)
    {
        <span class="code-comment">// Negatif: this küçük, 0: eşit, Pozitif: this büyük</span>
        <span class="code-keyword">return</span> BirthDate.CompareTo(other.BirthDate);
    }
}

<span class="code-comment">// Kullanım:</span>
<span class="code-type">Employee</span>[] employees = { emp1, emp2, emp3 };
Array.Sort(employees);  <span class="code-comment">// CompareTo metodunu otomatik kullanır</span>

<span class="code-comment">// IComparer: Dış sınıf ile sıralama</span>
<span class="code-keyword">public class</span> <span class="code-type">SalaryComparer</span> : <span class="code-type">IComparer</span>&lt;<span class="code-type">Employee</span>&gt;
{
    <span class="code-keyword">public int</span> <span class="code-method">Compare</span>(<span class="code-type">Employee</span> x, <span class="code-type">Employee</span> y)
        => x.Salary.CompareTo(y.Salary);
}
Array.Sort(employees, <span class="code-keyword">new</span> <span class="code-type">SalaryComparer</span>());</pre></div>
<div class="tip-box"><span class="keyword">IComparable&lt;T&gt;</span>: Sınıfın kendi içinde karşılaştırma (natural ordering). <span class="keyword">IComparer&lt;T&gt;</span>: Dış sınıf ile farklı kriterlere göre sıralama.</div>`},
            { title: "🔗 Çoklu Kalıtım Problemi ve Çözüm", body: `<p>C#'da çoklu sınıf kalıtımı yasaktır, ancak interface ile çözülür:</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Payable interface</span>
<span class="code-keyword">public interface</span> <span class="code-type">IPayable</span>
{
    <span class="code-keyword">void</span> <span class="code-method">Pay</span>();
}

<span class="code-comment">// Employee abstract sınıfı</span>
<span class="code-keyword">public abstract class</span> <span class="code-type">Employee</span> : <span class="code-type">IPayable</span>, <span class="code-type">IComparable</span>&lt;<span class="code-type">Employee</span>&gt;
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> MonthlySalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public virtual void</span> <span class="code-method">Pay</span>()
        => Console.WriteLine($<span class="code-string">"{Name}: {MonthlySalary:C} ödendi"</span>);

    <span class="code-keyword">public int</span> <span class="code-method">CompareTo</span>(<span class="code-type">Employee</span> other)
        => MonthlySalary.CompareTo(other.MonthlySalary);
}

<span class="code-comment">// Salesman: Hem Employee'den kalıtım hem de interface'ler</span>
<span class="code-keyword">public class</span> <span class="code-type">Salesman</span> : <span class="code-type">Employee</span>
{
    <span class="code-keyword">public decimal</span> SalesAmount { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> CommissionRate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public override void</span> <span class="code-method">Pay</span>()
    {
        <span class="code-keyword">decimal</span> total = MonthlySalary + SalesAmount * CommissionRate;
        Console.WriteLine($<span class="code-string">"{Name}: {total:C} ödendi (komisyon dahil)"</span>);
    }
}</pre></div>`}
        ]
    },

    // ===== TOPIC 8: Generic Sınıflar & Koleksiyonlar (FİNAL AĞIRLIKLI) =====
    {
        id: 8, title: "Generic & Koleksiyonlar 🔥", subtitle: "Generic metot/sınıf, type constraint, List<T>, Stack<T>",
        content: [
            { title: "🔄 Generic Metotlar — Neden Gerekli?", body: `<p>Aynı işi farklı tipler için yapan overloaded metotlar yerine <strong>tek bir generic metot</strong> yazılabilir:</p>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// ❌ KÖTÜ: Her tip için ayrı metot</span>
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>(<span class="code-keyword">int</span>[] arr) { ... }
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>(<span class="code-keyword">double</span>[] arr) { ... }
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>(<span class="code-keyword">char</span>[] arr) { ... }

<span class="code-comment">// ✅ İYİ: Tek generic metot</span>
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span>[] arr)
{
    <span class="code-keyword">foreach</span> (<span class="code-type">T</span> element <span class="code-keyword">in</span> arr)
        Console.Write($<span class="code-string">"{element} "</span>);
    Console.WriteLine();
}

<span class="code-comment">// Kullanım - compiler tipi otomatik çıkarır (type inference)</span>
<span class="code-keyword">int</span>[] intArr = { <span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span> };
<span class="code-keyword">double</span>[] dblArr = { <span class="code-number">1.1</span>, <span class="code-number">2.2</span>, <span class="code-number">3.3</span> };
<span class="code-keyword">char</span>[] chrArr = { <span class="code-string">'H'</span>, <span class="code-string">'e'</span>, <span class="code-string">'l'</span> };

DisplayArray(intArr);           <span class="code-comment">// T → int (implicit)</span>
DisplayArray(dblArr);           <span class="code-comment">// T → double (implicit)</span>
DisplayArray&lt;<span class="code-keyword">char</span>&gt;(chrArr);    <span class="code-comment">// T → char (explicit)</span></pre></div>
<div class="tip-box"><strong>Value type</strong> argümanlar için compiler tipe özel versiyon üretir. <strong>Reference type</strong> argümanlar için tek bir paylaşımlı versiyon üretir.</div>`},
            { title: "🔒 Type Constraints (Tip Kısıtlamaları)", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// where ile tip kısıtlaması</span>
<span class="code-keyword">static</span> <span class="code-type">T</span> <span class="code-method">Maximum</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span> x, <span class="code-type">T</span> y, <span class="code-type">T</span> z)
    <span class="code-keyword">where</span> <span class="code-type">T</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">T</span>&gt;
{
    <span class="code-type">T</span> max = x;
    <span class="code-keyword">if</span> (y.CompareTo(max) > <span class="code-number">0</span>) max = y;
    <span class="code-keyword">if</span> (z.CompareTo(max) > <span class="code-number">0</span>) max = z;
    <span class="code-keyword">return</span> max;
}

<span class="code-comment">// Kullanım:</span>
<span class="code-keyword">int</span> maxInt = Maximum(<span class="code-number">3</span>, <span class="code-number">7</span>, <span class="code-number">5</span>);      <span class="code-comment">// 7</span>
<span class="code-keyword">double</span> maxDbl = Maximum(<span class="code-number">1.1</span>, <span class="code-number">3.3</span>, <span class="code-number">2.2</span>); <span class="code-comment">// 3.3</span>
<span class="code-keyword">string</span> maxStr = Maximum(<span class="code-string">"a"</span>, <span class="code-string">"c"</span>, <span class="code-string">"b"</span>); <span class="code-comment">// "c"</span></pre></div>
<p><strong>Tüm constraint türleri:</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Constraint</th><th style="padding:8px;border:1px solid var(--border)">Açıklama</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">where T : class</span></td><td style="padding:8px;border:1px solid var(--border)">T referans tipi olmalı</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">where T : struct</span></td><td style="padding:8px;border:1px solid var(--border)">T değer tipi olmalı</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">where T : ClassName</span></td><td style="padding:8px;border:1px solid var(--border)">T belirtilen sınıf veya alt sınıfı olmalı</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">where T : InterfaceName</span></td><td style="padding:8px;border:1px solid var(--border)">T belirtilen interface'i uygulamalı</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">where T : new()</span></td><td style="padding:8px;border:1px solid var(--border)">T parametresiz constructor'a sahip olmalı</td></tr></table>
<div class="important-box"><strong>Birden fazla kısıtlama sırası:</strong> <code>class/struct</code> → <code>ClassName</code> → <code>InterfaceName</code> → <code>new()</code>. Örnek: <code>where T : class, IComparable&lt;T&gt;, new()</code></div>`},
            { title: "📚 Generic Sınıf: Stack<T> Örneği", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Stack</span>&lt;<span class="code-type">T</span>&gt;
{
    <span class="code-keyword">private int</span> top;
    <span class="code-keyword">private</span> <span class="code-type">T</span>[] elements;

    <span class="code-keyword">public</span> <span class="code-method">Stack</span>(<span class="code-keyword">int</span> size)
    {
        top = -<span class="code-number">1</span>;
        elements = <span class="code-keyword">new</span> <span class="code-type">T</span>[size];
    }

    <span class="code-keyword">public void</span> <span class="code-method">Push</span>(<span class="code-type">T</span> value)
    {
        <span class="code-keyword">if</span> (top == elements.Length - <span class="code-number">1</span>)
            <span class="code-keyword">throw new</span> <span class="code-type">FullStackException</span>(<span class="code-string">"Stack dolu!"</span>);
        elements[++top] = value;
    }

    <span class="code-keyword">public</span> <span class="code-type">T</span> <span class="code-method">Pop</span>()
    {
        <span class="code-keyword">if</span> (top == -<span class="code-number">1</span>)
            <span class="code-keyword">throw new</span> <span class="code-type">EmptyStackException</span>(<span class="code-string">"Stack boş!"</span>);
        <span class="code-keyword">return</span> elements[top--];
    }
}

<span class="code-comment">// Kullanım:</span>
<span class="code-keyword">var</span> intStack = <span class="code-keyword">new</span> <span class="code-type">Stack</span>&lt;<span class="code-keyword">int</span>&gt;(<span class="code-number">5</span>);
intStack.Push(<span class="code-number">1</span>);
intStack.Push(<span class="code-number">2</span>);
intStack.Push(<span class="code-number">3</span>);
Console.WriteLine(intStack.Pop());  <span class="code-comment">// 3 (LIFO)</span>
Console.WriteLine(intStack.Pop());  <span class="code-comment">// 2</span>

<span class="code-keyword">var</span> strStack = <span class="code-keyword">new</span> <span class="code-type">Stack</span>&lt;<span class="code-keyword">string</span>&gt;(<span class="code-number">3</span>);
strStack.Push(<span class="code-string">"Ali"</span>);
strStack.Push(<span class="code-string">"Veli"</span>);
Console.WriteLine(strStack.Pop());  <span class="code-comment">// "Veli"</span></pre></div>`},
            { title: "🔀 Generic Metot Overloading", body: `<ul>
<li>Generic metotlar <strong>overload</strong> edilebilir</li>
<li>Aynı isimle farklı parametre listesiyle birden fazla generic metot tanımlanabilir</li>
<li>Generic metot, non-generic metotla da overload edilebilir</li>
<li>Compiler, çağrı için <strong>en uygun eşleşmeyi</strong> arar (non-generic varsa onu tercih eder)</li>
</ul>
<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Generic</span>
<span class="code-keyword">static void</span> <span class="code-method">Print</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span> value) => Console.WriteLine(value);

<span class="code-comment">// Non-generic overload (daha spesifik)</span>
<span class="code-keyword">static void</span> <span class="code-method">Print</span>(<span class="code-keyword">string</span> value) => Console.WriteLine($<span class="code-string">"String: {value}"</span>);

Print(<span class="code-number">42</span>);         <span class="code-comment">// Generic versiyon çağrılır → "42"</span>
Print(<span class="code-string">"hello"</span>);    <span class="code-comment">// Non-generic versiyon çağrılır → "String: hello"</span></pre></div>`}
        ]
    },

    // ===== TOPIC 9: Dosyalar ve Akışlar =====
    {
        id: 9, title: "Dosyalar ve Akışlar", subtitle: "FileStream, StreamReader/Writer, Serialization",
        content: [
            { title: "📁 Dosya ve Stream Kavramları", body: `<p>C# dosyaları <strong>ardışık byte akışı (sequential stream of bytes)</strong> olarak görür.</p>
<ul><li>Dosyadaki veri <strong>persistent data</strong> (kalıcı veri) olarak adlandırılır</li>
<li><span class="keyword">Console.In</span> → Standart giriş (klavye) — TextReader türü</li>
<li><span class="keyword">Console.Out</span> → Standart çıkış (ekran) — TextWriter türü</li>
<li><span class="keyword">Console.Error</span> → Standart hata çıkışı — TextWriter türü</li></ul>
<p><strong>Stream Sınıf Hiyerarşisi (System.IO):</strong></p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;"><tr style="background:rgba(108,92,231,0.1)"><th style="padding:8px;border:1px solid var(--border)">Sınıf</th><th style="padding:8px;border:1px solid var(--border)">Türediği</th><th style="padding:8px;border:1px solid var(--border)">Kullanım</th></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">StreamReader</span></td><td style="padding:8px;border:1px solid var(--border)">TextReader</td><td style="padding:8px;border:1px solid var(--border)">Dosyadan metin okuma</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">StreamWriter</span></td><td style="padding:8px;border:1px solid var(--border)">TextWriter</td><td style="padding:8px;border:1px solid var(--border)">Dosyaya metin yazma</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">FileStream</span></td><td style="padding:8px;border:1px solid var(--border)">Stream</td><td style="padding:8px;border:1px solid var(--border)">Dosyaya binary okuma/yazma</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">MemoryStream</span></td><td style="padding:8px;border:1px solid var(--border)">Stream</td><td style="padding:8px;border:1px solid var(--border)">Bellekte veri transferi (hızlı)</td></tr>
<tr><td style="padding:8px;border:1px solid var(--border)"><span class="keyword">BufferedStream</span></td><td style="padding:8px;border:1px solid var(--border)">Stream</td><td style="padding:8px;border:1px solid var(--border)">Tamponlama ile veri transferi</td></tr></table>`},
            { title: "📝 Metin Dosya İşlemleri", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// ═══ Dosyaya yazma ═══</span>
<span class="code-keyword">using</span> (<span class="code-keyword">var</span> writer = <span class="code-keyword">new</span> <span class="code-type">StreamWriter</span>(<span class="code-string">"data.txt"</span>))
{
    writer.WriteLine(<span class="code-string">"100 Ali Yılmaz 1234.56"</span>);
    writer.WriteLine(<span class="code-string">"200 Ayşe Kaya 987.65"</span>);
}  <span class="code-comment">// using bloğu bitince dosya otomatik kapanır</span>

<span class="code-comment">// ═══ Dosyadan okuma ═══</span>
<span class="code-keyword">using</span> (<span class="code-keyword">var</span> reader = <span class="code-keyword">new</span> <span class="code-type">StreamReader</span>(<span class="code-string">"data.txt"</span>))
{
    <span class="code-keyword">string</span> line;
    <span class="code-keyword">while</span> ((line = reader.ReadLine()) != <span class="code-keyword">null</span>)
    {
        Console.WriteLine(line);
    }
}

<span class="code-comment">// FileStream ile binary erişim</span>
<span class="code-keyword">var</span> fs = <span class="code-keyword">new</span> <span class="code-type">FileStream</span>(<span class="code-string">"data.dat"</span>,
    FileMode.OpenOrCreate, FileAccess.ReadWrite);</pre></div>
<div class="tip-box"><span class="keyword">using</span> bloğu, IDisposable nesneleri otomatik kapatır (Dispose çağırır). Dosya sızıntısını önler!</div>`},
            { title: "💾 Object Serialization", body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// [Serializable] attribute ile sınıfı serileştirilebilir yap</span>
[<span class="code-type">Serializable</span>]
<span class="code-keyword">public class</span> <span class="code-type">RecordSerializable</span>
{
    <span class="code-keyword">public int</span> Account { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> Balance { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
}

<span class="code-comment">// Serialize (nesneyi dosyaya yaz)</span>
<span class="code-keyword">var</span> formatter = <span class="code-keyword">new</span> <span class="code-type">BinaryFormatter</span>();
<span class="code-keyword">using</span> (<span class="code-keyword">var</span> fs = <span class="code-keyword">new</span> <span class="code-type">FileStream</span>(<span class="code-string">"data.ser"</span>, FileMode.Create))
{
    formatter.Serialize(fs, record);
}

<span class="code-comment">// Deserialize (dosyadan nesneyi oku)</span>
<span class="code-keyword">using</span> (<span class="code-keyword">var</span> fs = <span class="code-keyword">new</span> <span class="code-type">FileStream</span>(<span class="code-string">"data.ser"</span>, FileMode.Open))
{
    <span class="code-comment">// Cast ZORUNLU! Deserialize object döner</span>
    <span class="code-keyword">var</span> rec = (<span class="code-type">RecordSerializable</span>)formatter.Deserialize(fs);
}</pre></div>
<div class="important-box"><strong>Serialization kuralları:</strong>
<ul><li><span class="keyword">[Serializable]</span> attribute VEYA <span class="keyword">ISerializable</span> interface uygulanmalı</li>
<li>Sınıfın <strong>tüm instance variable'ları</strong> da serializable olmalı</li>
<li>Simple type (int, string, vb.) ve diziler otomatik serializable</li>
<li>Binary dosyalar insan tarafından <strong>okunamaz</strong></li>
<li>Deserialize sonucunda <strong>explicit cast</strong> gerekir</li>
<li>Hata durumunda <span class="keyword">SerializationException</span> fırlatılır</li></ul></div>`}
        ]
    }
];

// ============================================
// QUIZ & EXAM QUESTIONS (ayrı dosyadan yüklenir)
// ============================================
