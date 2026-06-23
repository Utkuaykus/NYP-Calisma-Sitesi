// ============================================
// NYP Final Çalışma Sitesi - Veri Dosyası
// ============================================

const TOPICS = [
    // ===== TOPIC 0: UML & Giriş =====
    {
        id: 0,
        title: "UML & Giriş",
        subtitle: "Unified Modeling Language ve Temel Kavramlar",
        content: [
            {
                title: "📐 UML Nedir?",
                body: `<p>UML (Unified Modeling Language), yazılım sistemlerinin tasarımını <strong>görselleştirmek</strong> için kullanılan genel amaçlı modelleme dilidir.</p>
                <ul>
                    <li>1995 yılında yazılımlarda standart yaklaşım oluşturmak için geliştirilmiştir</li>
                    <li>Yazılı bir dil değildir, <strong>grafiksel gösterimler</strong> kullanır</li>
                    <li>Nesne yönelimli yazılım geliştirmenin çok önemli bir parçasıdır</li>
                    <li>14 çeşit UML türü vardır: <strong>Yapısal</strong> ve <strong>Davranışsal</strong> olmak üzere 2 gruba ayrılır</li>
                </ul>`
            },
            {
                title: "🏗️ UML Class Diagram",
                body: `<p>Class diyagramları 3 bölümden oluşur:</p>
                <ul>
                    <li><strong>En üst:</strong> Sınıf adı</li>
                    <li><strong>Orta:</strong> Attributes (özellikler/alanlar)</li>
                    <li><strong>Alt:</strong> Methods (metotlar)</li>
                </ul>
                <p><strong>Erişim Belirleyiciler:</strong></p>
                <ul>
                    <li><span class="keyword">-</span> → private</li>
                    <li><span class="keyword">+</span> → public</li>
                    <li><span class="keyword">#</span> → protected</li>
                    <li><span class="keyword">~</span> → internal</li>
                    <li><span class="keyword">{readOnly}</span> → readonly</li>
                    <li><strong>Altı çizili</strong> → static</li>
                </ul>
                <div class="tip-box">UML'de kalıtım (inheritance) üçgen başlı ok ile gösterilir. Alt sınıftan üst sınıfa doğru ok işaret eder.</div>`
            },
            {
                title: "📦 Namespace ve Enum",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Namespace: Ortak sınıfları bir arada tutmak için kullanılır</span>
<span class="code-keyword">namespace</span> <span class="code-type">MyLibrary</span>
{
    <span class="code-comment">// Enum: Adlandırılmış değerler kümesi</span>
    <span class="code-keyword">public enum</span> <span class="code-type">Cinsiyet</span>
    {
        Erkek,
        Kadin
    }

    <span class="code-keyword">public abstract class</span> <span class="code-type">Person</span>
    {
        <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
        <span class="code-keyword">public</span> <span class="code-type">Cinsiyet</span> Gender { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
        <span class="code-keyword">public abstract void</span> <span class="code-method">doWork</span>();
    }
}</pre></div>`
            }
        ]
    },

    // ===== TOPIC 1: Kontrol İfadeleri 1 =====
    {
        id: 1,
        title: "Kontrol İfadeleri 1",
        subtitle: "if, if-else, while, Sayaç ve Nöbetçi Kontrollü Döngüler",
        content: [
            {
                title: "🔀 Seçim İfadeleri",
                body: `<p>C# 3 tür seçim yapısı sunar:</p>
                <ul>
                    <li><span class="keyword">if</span> → Koşul true ise çalışır</li>
                    <li><span class="keyword">if...else</span> → Koşula göre iki yoldan biri çalışır</li>
                    <li><span class="keyword">switch</span> → Birden fazla duruma göre farklı işlem yapar</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">if</span> (grade >= <span class="code-number">90</span>)
    Console.WriteLine(<span class="code-string">"A"</span>);
<span class="code-keyword">else if</span> (grade >= <span class="code-number">80</span>)
    Console.WriteLine(<span class="code-string">"B"</span>);
<span class="code-keyword">else if</span> (grade >= <span class="code-number">70</span>)
    Console.WriteLine(<span class="code-string">"C"</span>);
<span class="code-keyword">else</span>
    Console.WriteLine(<span class="code-string">"F"</span>);

<span class="code-comment">// Koşullu operatör (?:)</span>
Console.WriteLine(grade >= <span class="code-number">60</span> ? <span class="code-string">"Passed"</span> : <span class="code-string">"Failed"</span>);</pre></div>`
            },
            {
                title: "🔄 while Döngüsü",
                body: `<p>Sayaç kontrollü ve nöbetçi kontrollü döngüler:</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Sayaç kontrollü (definite iteration)</span>
<span class="code-keyword">int</span> count = <span class="code-number">1</span>;
<span class="code-keyword">while</span> (count <= <span class="code-number">10</span>)
{
    total += grade;
    count++;
}

<span class="code-comment">// Nöbetçi kontrollü (indefinite iteration)</span>
<span class="code-keyword">while</span> (grade != -<span class="code-number">1</span>)  <span class="code-comment">// -1 sentinel değer</span>
{
    total += grade;
    grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
}</pre></div>
                <div class="important-box">Integer bölme kesirli kısmı kaybeder! <span class="keyword">(double)</span> cast kullanarak explicit conversion yapılabilir.</div>`
            },
            {
                title: "📊 Varsayılan Değerler",
                body: `<ul>
                    <li><span class="keyword">char, int, long, float, double, decimal</span> → 0</li>
                    <li><span class="keyword">bool</span> → false</li>
                    <li><strong>Referans tipleri</strong> → null</li>
                </ul>`
            }
        ]
    },

    // ===== TOPIC 2: Kontrol İfadeleri 2 =====
    {
        id: 2,
        title: "Kontrol İfadeleri 2",
        subtitle: "for, do-while, switch, break, continue, Mantıksal Operatörler",
        content: [
            {
                title: "🔁 for Döngüsü",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">2</span>; i <= <span class="code-number">20</span>; i += <span class="code-number">2</span>)
{
    total += i;  <span class="code-comment">// 2'den 20'ye çift sayıları topla</span>
}

<span class="code-comment">// Bileşik faiz hesabı</span>
<span class="code-keyword">decimal</span> amount = <span class="code-number">1000</span>;
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> year = <span class="code-number">1</span>; year <= <span class="code-number">10</span>; year++)
{
    amount = <span class="code-number">1000</span> * (<span class="code-keyword">decimal</span>)Math.Pow(<span class="code-number">1.05</span>, year);
}</pre></div>`
            },
            {
                title: "🔃 do...while ve switch",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// do...while: En az 1 kez çalışır</span>
<span class="code-keyword">do</span>
{
    Console.Write(<span class="code-string">"Sayı girin: "</span>);
    num = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
} <span class="code-keyword">while</span> (num != <span class="code-number">0</span>);

<span class="code-comment">// switch ifadesi</span>
<span class="code-keyword">switch</span> (grade)
{
    <span class="code-keyword">case</span> <span class="code-string">"A"</span>: Console.WriteLine(<span class="code-string">"Mükemmel"</span>); <span class="code-keyword">break</span>;
    <span class="code-keyword">case</span> <span class="code-string">"B"</span>: Console.WriteLine(<span class="code-string">"İyi"</span>); <span class="code-keyword">break</span>;
    <span class="code-keyword">default</span>: Console.WriteLine(<span class="code-string">"Geçersiz"</span>); <span class="code-keyword">break</span>;
}</pre></div>
                <div class="important-box"><span class="keyword">break</span> döngüden çıkar, <span class="keyword">continue</span> sonraki iterasyona geçer.</div>`
            },
            {
                title: "🧮 Mantıksal Operatörler",
                body: `<ul>
                    <li><span class="keyword">&&</span> → Koşullu AND (short-circuit)</li>
                    <li><span class="keyword">||</span> → Koşullu OR (short-circuit)</li>
                    <li><span class="keyword">&</span> → Boolean AND (short-circuit YOK)</li>
                    <li><span class="keyword">|</span> → Boolean OR (short-circuit YOK)</li>
                    <li><span class="keyword">^</span> → XOR (yalnızca biri true ise true)</li>
                    <li><span class="keyword">!</span> → Mantıksal değil (negation)</li>
                </ul>
                <div class="tip-box"><span class="keyword">&&</span> ve <span class="keyword">||</span> short-circuit yapar: ilk operand sonucu belirlerse ikincisi değerlendirilmez. <span class="keyword">&</span> ve <span class="keyword">|</span> her iki tarafı da değerlendirir.</div>`
            }
        ]
    },

    // ===== TOPIC 3: Diziler =====
    {
        id: 3,
        title: "Diziler",
        subtitle: "Tek ve Çok Boyutlu Diziler, foreach, params, ref",
        content: [
            {
                title: "📊 Dizi Temelleri",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Dizi oluşturma</span>
<span class="code-keyword">int</span>[] c = <span class="code-keyword">new int</span>[<span class="code-number">12</span>];

<span class="code-comment">// Dizi başlatıcı</span>
<span class="code-keyword">int</span>[] values = { <span class="code-number">32</span>, <span class="code-number">27</span>, <span class="code-number">64</span>, <span class="code-number">18</span>, <span class="code-number">95</span> };

<span class="code-comment">// foreach ile gezme</span>
<span class="code-keyword">foreach</span> (<span class="code-keyword">int</span> val <span class="code-keyword">in</span> values)
{
    Console.WriteLine(val);
}

<span class="code-comment">// Dizi boyutunu değiştirme</span>
Array.Resize(<span class="code-keyword">ref</span> values, <span class="code-number">10</span>);</pre></div>
                <p><strong>Varsayılan değerler:</strong> Sayısal → 0, bool → false, Referans → null</p>`
            },
            {
                title: "📐 Çok Boyutlu Diziler",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Rectangular (dikdörtgensel) dizi</span>
<span class="code-keyword">int</span>[,] b = { {<span class="code-number">1</span>, <span class="code-number">2</span>}, {<span class="code-number">3</span>, <span class="code-number">4</span>} };
<span class="code-keyword">int</span> val = b[<span class="code-number">0</span>, <span class="code-number">1</span>]; <span class="code-comment">// 2</span>

<span class="code-comment">// Jagged (düzensiz) dizi</span>
<span class="code-keyword">int</span>[][] jagged = {
    <span class="code-keyword">new int</span>[] {<span class="code-number">1</span>, <span class="code-number">2</span>},
    <span class="code-keyword">new int</span>[] {<span class="code-number">3</span>},
    <span class="code-keyword">new int</span>[] {<span class="code-number">4</span>, <span class="code-number">5</span>, <span class="code-number">6</span>}
};
<span class="code-keyword">int</span> val2 = jagged[<span class="code-number">2</span>][<span class="code-number">1</span>]; <span class="code-comment">// 5</span></pre></div>
                <div class="important-box">Rectangular: <span class="keyword">a[satır, sütun]</span> | Jagged: <span class="keyword">a[satır][sütun]</span></div>`
            },
            {
                title: "📤 Dizi Parametreleri ve params",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// params: Değişken uzunluklu parametre listesi</span>
<span class="code-keyword">static double</span> <span class="code-method">Average</span>(<span class="code-keyword">params double</span>[] values)
{
    <span class="code-keyword">double</span> total = <span class="code-number">0</span>;
    <span class="code-keyword">foreach</span> (<span class="code-keyword">double</span> val <span class="code-keyword">in</span> values)
        total += val;
    <span class="code-keyword">return</span> total / values.Length;
}

<span class="code-comment">// Kullanım</span>
<span class="code-keyword">double</span> avg = Average(<span class="code-number">1.0</span>, <span class="code-number">2.0</span>, <span class="code-number">3.0</span>);</pre></div>
                <div class="tip-box">Dizi bir referans tipidir. Metoda dizi gönderildiğinde referansın kopyası gönderilir, dizi kopyalanmaz!</div>`
            }
        ]
    },

    // ===== TOPIC 4: Sınıflar ve Nesneler =====
    {
        id: 4,
        title: "Sınıflar ve Nesneler",
        subtitle: "Constructor, this, static, readonly, Composition, List<T>",
        content: [
            {
                title: "🏛️ Sınıf Temelleri ve Erişim Belirleyiciler",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time1</span>
{
    <span class="code-keyword">public int</span> Hour { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Minute { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Second { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public string</span> <span class="code-method">ToUniversalString</span>() =>
        $<span class="code-string">"{Hour:D2}:{Minute:D2}:{Second:D2}"</span>;
}</pre></div>
                <ul>
                    <li><span class="keyword">public</span> → Herkese açık</li>
                    <li><span class="keyword">private</span> → Sadece sınıf içinden erişilebilir</li>
                    <li><span class="keyword">protected</span> → Sınıf ve türeyen sınıflardan erişilebilir</li>
                </ul>`
            },
            {
                title: "🔧 Constructor ve this Anahtar Kelimesi",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time2</span>
{
    <span class="code-keyword">private int</span> hour;
    <span class="code-keyword">private int</span> minute;
    <span class="code-keyword">private int</span> second;

    <span class="code-comment">// Parametresiz constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>() : <span class="code-keyword">this</span>(<span class="code-number">0</span>, <span class="code-number">0</span>, <span class="code-number">0</span>) { }

    <span class="code-comment">// Parametreli constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-keyword">int</span> hour, <span class="code-keyword">int</span> minute, <span class="code-keyword">int</span> second)
    {
        <span class="code-keyword">this</span>.hour = hour;     <span class="code-comment">// this ile instance variable'a erişim</span>
        <span class="code-keyword">this</span>.minute = minute;
        <span class="code-keyword">this</span>.second = second;
    }
}</pre></div>
                <div class="important-box">Constructor'lar kalıtılmaz! Sınıfta hiç constructor yoksa compiler varsayılan (parametsiz) constructor oluşturur. En az bir constructor tanımlanmışsa varsayılan constructor oluşturulmaz!</div>`
            },
            {
                title: "⚡ static, readonly ve const",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">private static int</span> Count { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; } = <span class="code-number">0</span>;
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; }  <span class="code-comment">// getter-only → implicit readonly</span>

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> name)
    {
        Name = name;
        ++Count;  <span class="code-comment">// Her nesne oluşturulduğunda artır</span>
    }
}</pre></div>
                <ul>
                    <li><span class="keyword">static</span>: Tüm nesneler tarafından paylaşılır. <code>this</code> kullanılamaz!</li>
                    <li><span class="keyword">const</span>: Derleme zamanında atanmalı, sonra değiştirilemez</li>
                    <li><span class="keyword">readonly</span>: Constructor'da atanabilir, sonra değiştirilemez</li>
                    <li><strong>Getter-only auto-property:</strong> Implicit readonly</li>
                </ul>`
            },
            {
                title: "🧩 Composition (Has-A) ve List<T>",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Composition: Bir sınıf başka sınıf nesnelerini içerir</span>
<span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public</span> <span class="code-type">Date</span> BirthDate { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public</span> <span class="code-type">Date</span> HireDate { <span class="code-keyword">get</span>; }
}

<span class="code-comment">// List&lt;T&gt; kullanımı</span>
<span class="code-keyword">var</span> items = <span class="code-keyword">new</span> <span class="code-type">List</span>&lt;<span class="code-keyword">string</span>&gt; { <span class="code-string">"a"</span>, <span class="code-string">"b"</span>, <span class="code-string">"c"</span> };
items.Add(<span class="code-string">"d"</span>);        <span class="code-comment">// Eleman ekle</span>
items.Remove(<span class="code-string">"b"</span>);     <span class="code-comment">// Eleman sil</span>
items.Insert(<span class="code-number">0</span>, <span class="code-string">"x"</span>); <span class="code-comment">// İndekse ekle</span>
<span class="code-keyword">int</span> cnt = items.Count;  <span class="code-comment">// Eleman sayısı</span></pre></div>
                <div class="tip-box">Exception handling: <span class="keyword">try-catch</span> bloğu ile hataları yakalayın. <span class="keyword">try</span> bloğunda tanımlanan değişkenler <span class="keyword">catch</span> bloğunda erişilemez!</div>`
            }
        ]
    },

    // ===== TOPIC 5: Kalıtım (PRIORITY HIGH) =====
    {
        id: 5,
        title: "Kalıtım (Inheritance)",
        subtitle: "base, virtual, override, protected — FİNALDE AĞIRLIKLI",
        content: [
            {
                title: "🧬 Kalıtım Temelleri",
                body: `<p>Kalıtım, mevcut bir sınıfın üyelerini yeni bir sınıfa aktarır. <strong>is-a</strong> ilişkisini temsil eder.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">CommissionEmployee</span>
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

    <span class="code-keyword">public virtual decimal</span> <span class="code-method">Earnings</span>()
        => GrossSales * CommissionRate;

    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"{FirstName} {LastName}"</span>;
}</pre></div>
                <ul>
                    <li><strong>Doğrudan (direct) taban sınıf:</strong> Türeyen sınıfın doğrudan kalıtım aldığı sınıf</li>
                    <li><strong>Dolaylı (indirect) taban sınıf:</strong> Hiyerarşide daha yukarıdaki sınıflar</li>
                    <li>Hiyerarşi <span class="keyword">object</span> sınıfı ile başlar</li>
                </ul>`
            },
            {
                title: "🔗 Türeyen Sınıf ve base Anahtar Kelimesi",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">BasePlusCommissionEmployee</span> : <span class="code-type">CommissionEmployee</span>
{
    <span class="code-keyword">public decimal</span> BaseSalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// base ile taban sınıf constructor'ını çağır</span>
    <span class="code-keyword">public</span> <span class="code-method">BasePlusCommissionEmployee</span>(<span class="code-keyword">string</span> first,
        <span class="code-keyword">string</span> last, <span class="code-keyword">decimal</span> sales, <span class="code-keyword">decimal</span> rate,
        <span class="code-keyword">decimal</span> salary)
        : <span class="code-keyword">base</span>(first, last, sales, rate)
    {
        BaseSalary = salary;
    }

    <span class="code-comment">// base.Earnings() ile taban sınıf metodunu çağır</span>
    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>()
        => BaseSalary + <span class="code-keyword">base</span>.Earnings();

    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"base salary: {BaseSalary} + {base.ToString()}"</span>;
}</pre></div>
                <div class="important-box">
                    <ul>
                        <li><span class="keyword">base</span> ile taban sınıf constructor ve metotlarına erişilir</li>
                        <li>Taban sınıf <span class="keyword">private</span> üyelerine doğrudan erişilemez, <span class="keyword">public</span> property'ler üzerinden erişilir</li>
                        <li>Constructor'lar kalıtılmaz! Her constructor kendi taban sınıf constructor'ını çağırmalıdır</li>
                    </ul>
                </div>`
            },
            {
                title: "🔑 virtual, override ve Erişim Seviyeleri",
                body: `<ul>
                    <li><span class="keyword">virtual</span>: Taban sınıfta metodu override edilebilir olarak işaretler</li>
                    <li><span class="keyword">override</span>: Türeyen sınıfta taban sınıf metodunu yeniden tanımlar</li>
                    <li><span class="keyword">protected</span>: Sınıf ve türeyen sınıflardan erişilebilir, dışarıdan erişilemez</li>
                    <li><span class="keyword">private</span> üyeler kalıtılır ama doğrudan erişilemez</li>
                </ul>
                <div class="tip-box"><span class="keyword">ToString()</span> metodu <span class="keyword">object</span> sınıfından kalıtılır. Override etmek için imza (ad, parametreler, dönüş tipi) aynı olmalıdır.</div>`
            }
        ]
    },

    // ===== TOPIC 6: Çok Biçimlilik (PRIORITY HIGH) =====
    {
        id: 6,
        title: "Çok Biçimlilik (Polymorphism)",
        subtitle: "abstract, sealed, upcasting, downcasting — FİNALDE AĞIRLIKLI",
        content: [
            {
                title: "🎭 Çok Biçimlilik Kavramı",
                body: `<p>Polymorphism, aynı taban sınıfı paylaşan nesneleri taban sınıf nesneleri gibi işlemenizi sağlar.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Taban sınıf referansı ile türeyen sınıf nesnesi tutma</span>
<span class="code-type">SpaceObject</span>[] arr = <span class="code-keyword">new</span> <span class="code-type">SpaceObject</span>[<span class="code-number">5</span>];
arr[<span class="code-number">0</span>] = <span class="code-keyword">new</span> <span class="code-type">Martian</span>();
arr[<span class="code-number">1</span>] = <span class="code-keyword">new</span> <span class="code-type">Venusian</span>();
arr[<span class="code-number">2</span>] = <span class="code-keyword">new</span> <span class="code-type">SpaceShip</span>();

<span class="code-comment">// Polimorfik çağrı - her nesne kendi Draw'ını çağırır</span>
<span class="code-keyword">foreach</span> (<span class="code-type">SpaceObject</span> obj <span class="code-keyword">in</span> arr)
{
    obj.Draw();  <span class="code-comment">// Runtime'da doğru metot çağrılır</span>
}</pre></div>`
            },
            {
                title: "🔷 Abstract Sınıflar ve Metotlar",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public abstract class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; }

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last)
    {
        FirstName = first;
        LastName = last;
    }

    <span class="code-comment">// Abstract metot: Gövdesi YOK, türeyen sınıf ZORUNLU override eder</span>
    <span class="code-keyword">public abstract decimal</span> <span class="code-method">Earnings</span>();

    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"{FirstName} {LastName}"</span>;
}

<span class="code-keyword">public class</span> <span class="code-type">SalariedEmployee</span> : <span class="code-type">Employee</span>
{
    <span class="code-keyword">public decimal</span> WeeklySalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">SalariedEmployee</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last,
        <span class="code-keyword">decimal</span> salary) : <span class="code-keyword">base</span>(first, last)
    {
        WeeklySalary = salary;
    }

    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>() => WeeklySalary;
}</pre></div>
                <div class="important-box">
                    <ul>
                        <li>Abstract sınıflar <strong>new ile oluşturulamaz!</strong></li>
                        <li>Abstract metot/property içeren sınıf <strong>mutlaka</strong> abstract olmalı</li>
                        <li>Abstract metotlar implicitly <span class="keyword">virtual</span>'dır</li>
                        <li>Constructor ve static metotlar abstract/virtual olamaz</li>
                        <li>Concrete (somut) sınıflar tüm abstract üyeleri override etmeli</li>
                    </ul>
                </div>`
            },
            {
                title: "🔒 sealed ve Tür Dönüşümleri",
                body: `<ul>
                    <li><span class="keyword">sealed</span> metot: Override edilemez</li>
                    <li><span class="keyword">sealed</span> sınıf: Kalıtılamaz (örn: <span class="keyword">string</span>)</li>
                    <li><span class="keyword">private</span> ve <span class="keyword">static</span> metotlar implicitly sealed'dır</li>
                    <li><span class="keyword">override sealed</span>: Override eder ama daha aşağıda override edilemez</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Upcasting (güvenli - implicit)</span>
<span class="code-type">Employee</span> emp = <span class="code-keyword">new</span> <span class="code-type">SalariedEmployee</span>(<span class="code-string">"Ali"</span>, <span class="code-string">"Veli"</span>, <span class="code-number">1000</span>);

<span class="code-comment">// Downcasting (tehlikeli - explicit cast gerekir)</span>
<span class="code-type">SalariedEmployee</span> sal = (<span class="code-type">SalariedEmployee</span>)emp;  <span class="code-comment">// InvalidCastException riski!</span>

<span class="code-comment">// Güvenli downcasting: as operatörü</span>
<span class="code-type">SalariedEmployee</span> sal2 = emp <span class="code-keyword">as</span> <span class="code-type">SalariedEmployee</span>;
<span class="code-keyword">if</span> (sal2 != <span class="code-keyword">null</span>) { <span class="code-comment">/* güvenle kullan */</span> }

<span class="code-comment">// GetType() ile tür kontrolü</span>
Console.WriteLine(emp.GetType());  <span class="code-comment">// SalariedEmployee</span></pre></div>
                <div class="tip-box">
                    <ul>
                        <li>Türeyen → Taban: Güvenli (implicit)</li>
                        <li>Taban → Türeyen: Derleme hatası, explicit cast gerekir</li>
                        <li><span class="keyword">as</span> operatörü: Geçersiz cast'de exception yerine <span class="keyword">null</span> döner</li>
                    </ul>
                </div>`
            }
        ]
    },

    // ===== TOPIC 7: Arayüzler (PRIORITY HIGH) =====
    {
        id: 7,
        title: "Arayüzler (Interfaces)",
        subtitle: "interface, IComparable, IPayable — FİNALDE AĞIRLIKLI",
        content: [
            {
                title: "🔌 Interface Kavramı",
                body: `<p>Interface'ler sınıfların <strong>uygulaması gereken</strong> public servisleri (metot ve property) belirtir.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Interface tanımı</span>
<span class="code-keyword">public interface</span> <span class="code-type">IPayable</span>
{
    <span class="code-keyword">decimal</span> <span class="code-method">GetPaymentAmount</span>();  <span class="code-comment">// gövde yok!</span>
}

<span class="code-comment">// Interface uygulama</span>
<span class="code-keyword">public class</span> <span class="code-type">Invoice</span> : <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public string</span> PartDescription { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> PricePerItem { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Quantity { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>()
        => Quantity * PricePerItem;
}

<span class="code-comment">// Hem sınıftan kalıtım hem interface uygulama</span>
<span class="code-keyword">public class</span> <span class="code-type">SalariedEmployee</span> : <span class="code-type">Employee</span>, <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>() => Earnings();
}</pre></div>
                <div class="important-box">
                    <ul>
                        <li>Interface'ler <span class="keyword">default implementation</span> sağlamaz (abstract sınıflar sağlayabilir)</li>
                        <li>Bir sınıf <strong>birden fazla</strong> interface uygulayabilir: <code>ClassName : Interface1, Interface2</code></li>
                        <li>Hem sınıf hem interface varsa: <code>ClassName : BaseClass, Interface1</code> (sınıf önce!)</li>
                        <li>Tüm metot ve property'ler implement edilmeli</li>
                    </ul>
                </div>`
            },
            {
                title: "📊 IComparable ve Sıralama",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">Employee</span>&gt;
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public</span> <span class="code-type">DateTime</span> BirthDate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// IComparable&lt;T&gt; uygulaması</span>
    <span class="code-keyword">public int</span> <span class="code-method">CompareTo</span>(<span class="code-type">Employee</span> other)
    {
        <span class="code-keyword">return</span> BirthDate.CompareTo(other.BirthDate);
    }
}

<span class="code-comment">// Kullanım</span>
<span class="code-type">Employee</span>[] employees = { emp1, emp2, emp3 };
Array.Sort(employees);  <span class="code-comment">// CompareTo metodunu kullanır</span></pre></div>
                <div class="tip-box">C#'da çoklu kalıtıma izin verilmez! Ancak birden fazla interface uygulanabilir. Bu, çoklu kalıtım ihtiyacını karşılar.</div>`
            },
            {
                title: "🆚 Interface vs Abstract Sınıf",
                body: `<table style="width:100%; border-collapse: collapse; margin-top: 12px;">
                <tr style="background: rgba(108,92,231,0.1);">
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Özellik</th>
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Interface</th>
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Abstract Sınıf</th>
                </tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);">Default uygulama</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Hayır</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Evet</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);">Çoklu kalıtım</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Evet</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Hayır</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);">Constructor</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Hayır</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Evet</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);">Alanlar (fields)</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Hayır</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Evet</td></tr>
                <tr><td style="padding: 10px;">Ne zaman kullan?</td><td style="padding: 10px;">İlişkisiz sınıflar arasında ortak davranış</td><td style="padding: 10px;">İlişkili sınıflar için ortak temel</td></tr>
                </table>`
            }
        ]
    },

    // ===== TOPIC 8: Generic Sınıflar & Koleksiyonlar (PRIORITY HIGH) =====
    {
        id: 8,
        title: "Generic Sınıflar & Koleksiyonlar",
        subtitle: "Generic metot, type constraint, List<T>, Stack<T> — FİNALDE AĞIRLIKLI",
        content: [
            {
                title: "🔄 Generic Metotlar",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Overloaded metotlar yerine tek generic metot</span>
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span>[] arr)
{
    <span class="code-keyword">foreach</span> (<span class="code-type">T</span> element <span class="code-keyword">in</span> arr)
        Console.Write($<span class="code-string">"{element} "</span>);
    Console.WriteLine();
}

<span class="code-comment">// Kullanım - tip otomatik çıkarılır</span>
<span class="code-keyword">int</span>[] intArr = { <span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span> };
<span class="code-keyword">double</span>[] dblArr = { <span class="code-number">1.1</span>, <span class="code-number">2.2</span> };
<span class="code-keyword">char</span>[] chrArr = { <span class="code-string">'A'</span>, <span class="code-string">'B'</span> };

DisplayArray(intArr);     <span class="code-comment">// T → int</span>
DisplayArray(dblArr);     <span class="code-comment">// T → double</span>
DisplayArray&lt;<span class="code-keyword">char</span>&gt;(chrArr); <span class="code-comment">// Explicit tip belirtme</span></pre></div>`
            },
            {
                title: "🔒 Type Constraints (Tip Kısıtlamaları)",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// where ile tip kısıtlaması</span>
<span class="code-keyword">static</span> <span class="code-type">T</span> <span class="code-method">Maximum</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span> x, <span class="code-type">T</span> y, <span class="code-type">T</span> z)
    <span class="code-keyword">where</span> <span class="code-type">T</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">T</span>&gt;
{
    <span class="code-type">T</span> max = x;
    <span class="code-keyword">if</span> (y.CompareTo(max) > <span class="code-number">0</span>) max = y;
    <span class="code-keyword">if</span> (z.CompareTo(max) > <span class="code-number">0</span>) max = z;
    <span class="code-keyword">return</span> max;
}</pre></div>
                <p><strong>Type Constraint Türleri:</strong></p>
                <ul>
                    <li><span class="keyword">where T : ClassName</span> → T belirtilen sınıf veya alt sınıfı olmalı</li>
                    <li><span class="keyword">where T : InterfaceName</span> → T belirtilen interface'i uygulamalı</li>
                    <li><span class="keyword">where T : class</span> → T referans tipi olmalı</li>
                    <li><span class="keyword">where T : struct</span> → T değer tipi olmalı</li>
                    <li><span class="keyword">where T : new()</span> → T parametresiz constructor'a sahip olmalı</li>
                </ul>
                <div class="important-box">Birden fazla kısıtlama virgülle ayrılır. Sıralama: class/struct → ClassName → InterfaceName → new()</div>`
            },
            {
                title: "📚 Generic Sınıf: Stack<T>",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Stack</span>&lt;<span class="code-type">T</span>&gt;
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
            <span class="code-keyword">throw new</span> <span class="code-type">FullStackException</span>();
        elements[++top] = value;
    }

    <span class="code-keyword">public</span> <span class="code-type">T</span> <span class="code-method">Pop</span>()
    {
        <span class="code-keyword">if</span> (top == -<span class="code-number">1</span>)
            <span class="code-keyword">throw new</span> <span class="code-type">EmptyStackException</span>();
        <span class="code-keyword">return</span> elements[top--];
    }
}

<span class="code-comment">// Kullanım</span>
<span class="code-keyword">var</span> intStack = <span class="code-keyword">new</span> <span class="code-type">Stack</span>&lt;<span class="code-keyword">int</span>&gt;(<span class="code-number">5</span>);
intStack.Push(<span class="code-number">42</span>);
<span class="code-keyword">int</span> val = intStack.Pop();</pre></div>`
            }
        ]
    },

    // ===== TOPIC 9: Dosyalar ve Akışlar =====
    {
        id: 9,
        title: "Dosyalar ve Akışlar",
        subtitle: "FileStream, StreamReader, StreamWriter, Serialization",
        content: [
            {
                title: "📁 Dosya Kavramları",
                body: `<ul>
                    <li>C# dosyaları <strong>ardışık byte akışı</strong> olarak görür</li>
                    <li><span class="keyword">Console.In</span> → Standart giriş (klavye)</li>
                    <li><span class="keyword">Console.Out</span> → Standart çıkış (ekran)</li>
                    <li><span class="keyword">Console.Error</span> → Standart hata çıkışı</li>
                    <li>Dosyadaki veri <strong>persistent data</strong> olarak adlandırılır</li>
                </ul>
                <p><strong>Stream Sınıfları (System.IO):</strong></p>
                <ul>
                    <li><span class="keyword">FileStream</span> → Dosyaya okuma/yazma</li>
                    <li><span class="keyword">MemoryStream</span> → Bellekte veri transferi (hızlı)</li>
                    <li><span class="keyword">BufferedStream</span> → Tamponlama ile veri transferi</li>
                    <li><span class="keyword">StreamReader</span> → Dosyadan metin okuma (TextReader'dan türer)</li>
                    <li><span class="keyword">StreamWriter</span> → Dosyaya metin yazma (TextWriter'dan türer)</li>
                </ul>`
            },
            {
                title: "💾 Serialization (Serileştirme)",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Serializable sınıf</span>
[<span class="code-type">Serializable</span>]
<span class="code-keyword">public class</span> <span class="code-type">RecordSerializable</span>
{
    <span class="code-keyword">public int</span> Account { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> Balance { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
}

<span class="code-comment">// BinaryFormatter ile serileştirme</span>
<span class="code-keyword">var</span> formatter = <span class="code-keyword">new</span> <span class="code-type">BinaryFormatter</span>();
formatter.Serialize(fileStream, record);  <span class="code-comment">// Yazma</span>

<span class="code-comment">// Deserialize</span>
<span class="code-keyword">var</span> record = (<span class="code-type">RecordSerializable</span>)formatter.Deserialize(fileStream);</pre></div>
                <div class="important-box">
                    <ul>
                        <li><span class="keyword">[Serializable]</span> attribute veya <span class="keyword">ISerializable</span> interface uygulanmalı</li>
                        <li>Sınıfın tüm instance variable'ları da serializable olmalı</li>
                        <li>Simple type ve string'ler otomatik serializable</li>
                        <li>Binary dosyalar insan tarafından okunamaz</li>
                    </ul>
                </div>`
            }
        ]
    }
];

// ============================================
// QUIZ QUESTIONS
// ============================================

const QUESTIONS = [
    // ========== INHERITANCE QUESTIONS ==========
    {
        id: 1,
        type: 'fillblank',
        topic: 'inheritance',
        difficulty: 'hard',
        points: 10,
        question: 'Aşağıdaki kodda boşlukları doldurun: BasePlusCommissionEmployee sınıfı CommissionEmployee sınıfından türetilmektedir.',
        code: `public class BasePlusCommissionEmployee : CommissionEmployee
{
    public decimal BaseSalary { get; set; }

    public BasePlusCommissionEmployee(string first, string last,
        decimal sales, decimal rate, decimal salary)
        : _____(first, last, sales, rate)
    {
        BaseSalary = salary;
    }

    public _____ decimal Earnings()
        => BaseSalary + _____.Earnings();
}`,
        blanks: ['base', 'override', 'base'],
        explanation: '`base` anahtar kelimesi taban sınıf constructor\'ını ve metotlarını çağırır. `override` taban sınıf virtual/abstract metodunu yeniden tanımlar.'
    },
    {
        id: 2,
        type: 'fillblank',
        topic: 'inheritance',
        difficulty: 'medium',
        points: 8,
        question: 'Aşağıdaki sınıf tanımında boşlukları doldurun:',
        code: `public class CommissionEmployee
{
    public string FirstName { get; }
    public decimal GrossSales { get; set; }
    public decimal CommissionRate { get; set; }

    // Bu metot türeyen sınıflarda override edilebilir
    public _____ decimal Earnings()
        => GrossSales * CommissionRate;

    // object sınıfından gelen ToString metodunu override ediyoruz
    public _____ string ToString()
        => $"{FirstName}";
}`,
        blanks: ['virtual', 'override'],
        explanation: '`virtual` bir metodu override edilebilir yapar. `ToString()` object sınıfından kalıtılır ve zaten virtual olduğu için `override` ile yeniden tanımlanır.'
    },
    {
        id: 3,
        type: 'concept',
        topic: 'inheritance',
        difficulty: 'medium',
        points: 5,
        question: 'Taban sınıfın private üyeleri hakkında hangisi doğrudur?',
        options: [
            'Türeyen sınıflar tarafından kalıtılmaz',
            'Türeyen sınıflar tarafından kalıtılır ama doğrudan erişilemez',
            'Türeyen sınıflardan doğrudan erişilebilir',
            'Sadece static metotlardan erişilebilir'
        ],
        correct: 1,
        explanation: 'Private üyeler kalıtılır ama türeyen sınıf metotları ve property\'lerinden doğrudan erişilemez. Public property\'ler üzerinden erişilir.'
    },
    {
        id: 4,
        type: 'concept',
        topic: 'inheritance',
        difficulty: 'easy',
        points: 5,
        question: 'Constructor\'lar hakkında hangisi doğrudur?',
        options: [
            'Constructor\'lar kalıtılır',
            'Constructor\'lar kalıtılmaz, her sınıf kendi constructor\'ını tanımlamalıdır',
            'Constructor\'lar sadece abstract sınıflarda kalıtılır',
            'Constructor\'lar sadece sealed sınıflarda kalıtılmaz'
        ],
        correct: 1,
        explanation: 'Constructor\'lar ASLA kalıtılmaz. Her türeyen sınıf kendi constructor\'ını tanımlamalı ve base() ile taban sınıf constructor\'ını çağırmalıdır.'
    },
    {
        id: 5,
        type: 'output',
        topic: 'inheritance',
        difficulty: 'hard',
        points: 15,
        question: 'Aşağıdaki kodun ekran çıktısını yazın:',
        code: `class A
{
    public virtual void Yaz()
    {
        Console.Write("A ");
    }
}

class B : A
{
    public override void Yaz()
    {
        base.Yaz();
        Console.Write("B ");
    }
}

class C : B
{
    public override void Yaz()
    {
        base.Yaz();
        Console.Write("C ");
    }
}

// Main:
A obj = new C();
obj.Yaz();`,
        answer: 'A B C',
        explanation: 'C.Yaz() → base.Yaz() (B) → B.Yaz() → base.Yaz() (A) → A.Yaz() yazı "A " → sonra "B " → sonra "C ". Polimorfizm sayesinde runtime\'da C tipinin metodu çağrılır.'
    },

    // ========== POLYMORPHISM QUESTIONS ==========
    {
        id: 6,
        type: 'fillblank',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 10,
        question: 'Abstract Employee sınıfını tamamlayın:',
        code: `public _____ class Employee
{
    public string Name { get; }

    public Employee(string name)
    {
        Name = name;
    }

    // Türeyen sınıflar ZORUNLU olarak bu metodu uygulamalı
    public _____ decimal Earnings();
}

public class SalariedEmployee : Employee
{
    public decimal Salary { get; set; }

    public SalariedEmployee(string name, decimal salary)
        : _____(name)
    {
        Salary = salary;
    }

    public _____ decimal Earnings() => Salary;
}`,
        blanks: ['abstract', 'abstract', 'base', 'override'],
        explanation: 'Abstract sınıf ve abstract metot tanımlanır. Türeyen sınıf base ile constructor çağırır ve override ile abstract metodu uygular.'
    },
    {
        id: 7,
        type: 'concept',
        topic: 'polymorphism',
        difficulty: 'medium',
        points: 5,
        question: 'Abstract sınıflar hakkında hangisi YANLIŞTIR?',
        options: [
            'Abstract sınıflar new ile oluşturulamaz (instantiate edilemez)',
            'Abstract sınıf referansları concrete sınıf nesnelerini tutabilir',
            'Abstract metotların gövdesi yoktur',
            'Abstract sınıfların constructor\'ı olamaz'
        ],
        correct: 3,
        explanation: 'Abstract sınıfların constructor\'ı OLABILIR! Constructor\'lar abstract/virtual olamaz ama abstract sınıflar constructor tanımlayabilir.'
    },
    {
        id: 8,
        type: 'concept',
        topic: 'polymorphism',
        difficulty: 'medium',
        points: 5,
        question: 'sealed anahtar kelimesi hakkında hangisi doğrudur?',
        options: [
            'sealed sınıftan kalıtım alınabilir',
            'sealed metot override edilemez, sealed sınıftan kalıtım alınamaz',
            'sealed sadece abstract sınıflarda kullanılır',
            'Private metotlar sealed değildir'
        ],
        correct: 1,
        explanation: 'sealed metot override edilemez, sealed sınıftan kalıtım alınamaz. private ve static metotlar implicitly sealed\'dır. string sınıfı sealed\'dır.'
    },
    {
        id: 9,
        type: 'output',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 15,
        question: 'Aşağıdaki kodun çıktısını yazın:',
        code: `abstract class Sekil
{
    public abstract double Alan();
    public override string ToString() => GetType().Name;
}

class Daire : Sekil
{
    double yaricap;
    public Daire(double r) { yaricap = r; }
    public override double Alan() => 3.14 * yaricap * yaricap;
}

class Kare : Sekil
{
    double kenar;
    public Kare(double k) { kenar = k; }
    public override double Alan() => kenar * kenar;
}

// Main:
Sekil[] sekiller = { new Daire(5), new Kare(4) };
foreach (Sekil s in sekiller)
    Console.WriteLine($"{s}: {s.Alan()}");`,
        answer: 'Daire: 78.5\nKare: 16',
        explanation: 'GetType().Name sınıf adını döner (Daire, Kare). Alan() polimorfik olarak her nesnenin kendi implementasyonunu çağırır.'
    },
    {
        id: 10,
        type: 'fillblank',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 10,
        question: 'Güvenli downcasting kodunu tamamlayın:',
        code: `Employee emp = new SalariedEmployee("Ali", 5000);

// Güvenli downcasting
SalariedEmployee sal = emp _____ SalariedEmployee;
if (sal _____ null)
{
    Console.WriteLine(sal.Salary);
}

// Tür bilgisi alma
Console.WriteLine(emp._____());`,
        blanks: ['as', '!=', 'GetType'],
        explanation: '`as` operatörü güvenli downcasting yapar (başarısız olursa null döner). `GetType()` nesnenin gerçek türünü döner.'
    },

    // ========== INTERFACE QUESTIONS ==========
    {
        id: 11,
        type: 'fillblank',
        topic: 'interface',
        difficulty: 'hard',
        points: 10,
        question: 'IPayable interface\'ini ve uygulayan sınıfı tamamlayın:',
        code: `public _____ IPayable
{
    decimal GetPaymentAmount();
}

public class Invoice : _____
{
    public int Quantity { get; set; }
    public decimal Price { get; set; }

    public decimal _____()
        => Quantity * Price;
}`,
        blanks: ['interface', 'IPayable', 'GetPaymentAmount'],
        explanation: 'interface anahtar kelimesi ile arayüz tanımlanır. Sınıf IPayable\'ı uygular ve tüm metotlarını implement eder.'
    },
    {
        id: 12,
        type: 'fillblank',
        topic: 'interface',
        difficulty: 'hard',
        points: 10,
        question: 'IComparable<T> interface\'ini uygulayan sınıfı tamamlayın:',
        code: `public class Student : IComparable<_____ >
{
    public string Name { get; set; }
    public double Average { get; set; }

    public int _____(Student other)
    {
        return Average.CompareTo(other.Average);
    }
}

// Main:
Student[] students = { s1, s2, s3 };
Array._____(students);  // CompareTo kullanarak sıralar`,
        blanks: ['Student', 'CompareTo', 'Sort'],
        explanation: 'IComparable<T> interface\'i CompareTo metodunu zorunlu kılar. Array.Sort() bu metodu kullanarak sıralama yapar.'
    },
    {
        id: 13,
        type: 'concept',
        topic: 'interface',
        difficulty: 'medium',
        points: 5,
        question: 'Interface ve abstract sınıf karşılaştırmasında hangisi doğrudur?',
        options: [
            'Bir sınıf birden fazla abstract sınıftan kalıtım alabilir',
            'Interface\'ler default implementasyon sağlayabilir',
            'Bir sınıf birden fazla interface uygulayabilir',
            'Interface\'ler constructor tanımlayabilir'
        ],
        correct: 2,
        explanation: 'C#\'da bir sınıf sadece BİR sınıftan kalıtım alabilir ama BİRDEN FAZLA interface uygulayabilir.'
    },
    {
        id: 14,
        type: 'fillblank',
        topic: 'interface',
        difficulty: 'hard',
        points: 10,
        question: 'Hem sınıftan kalıtım hem interface uygulayan sınıfı tamamlayın:',
        code: `// Sınıf adı ÖNCE, interface adları SONRA yazılır
public class Salesman : _____, _____
{
    public decimal MonthlySales { get; set; }
    public decimal CommissionRate { get; set; }

    public Salesman(string name, decimal salary,
        decimal sales, decimal rate)
        : _____(name, salary)
    {
        MonthlySales = sales;
        CommissionRate = rate;
    }

    public decimal GetPaymentAmount()
        => MonthlySalary + MonthlySales * CommissionRate;
}`,
        blanks: ['Employee', 'IPayable', 'base'],
        explanation: 'Kalıtımda sınıf adı önce, interface adları sonra yazılır: `class A : BaseClass, IInterface1, IInterface2`'
    },

    // ========== GENERIC QUESTIONS ==========
    {
        id: 15,
        type: 'fillblank',
        topic: 'generic',
        difficulty: 'hard',
        points: 10,
        question: 'Generic Maximum metodunu tamamlayın:',
        code: `static T Maximum<T>(T x, T y, T z)
    _____ T : IComparable<T>
{
    T max = x;
    if (y._____(max) > 0)
        max = y;
    if (z._____(max) > 0)
        max = z;
    return max;
}`,
        blanks: ['where', 'CompareTo', 'CompareTo'],
        explanation: '`where` type constraint belirtir. IComparable<T> interface\'inin CompareTo metodu karşılaştırma yapar.'
    },
    {
        id: 16,
        type: 'fillblank',
        topic: 'generic',
        difficulty: 'hard',
        points: 10,
        question: 'Generic Stack sınıfını tamamlayın:',
        code: `public class Stack<_____ >
{
    private int top;
    private _____[] elements;

    public Stack(int size)
    {
        top = -1;
        elements = new _____[size];
    }

    public void Push(_____ value)
    {
        if (top == elements.Length - 1)
            throw new FullStackException();
        elements[++top] = value;
    }

    public _____ Pop()
    {
        if (top == -1)
            throw new EmptyStackException();
        return elements[top--];
    }
}`,
        blanks: ['T', 'T', 'T', 'T', 'T'],
        explanation: 'Generic sınıflarda T tip parametresidir. Tüm somut tipler yerine T kullanılır.'
    },
    {
        id: 17,
        type: 'concept',
        topic: 'generic',
        difficulty: 'medium',
        points: 5,
        question: 'Type constraint sıralaması hangisinde doğrudur?',
        options: [
            'new() → class → InterfaceName',
            'InterfaceName → class → new()',
            'class/struct → InterfaceName → new()',
            'class → new() → InterfaceName'
        ],
        correct: 2,
        explanation: 'Doğru sıralama: class/struct → ClassName → InterfaceName → new(). class/struct ilk olmalı, new() son olmalı.'
    },
    {
        id: 18,
        type: 'output',
        topic: 'generic',
        difficulty: 'medium',
        points: 10,
        question: 'Aşağıdaki generic kodun çıktısını yazın:',
        code: `static void DisplayArray<T>(T[] arr)
{
    foreach (T elem in arr)
        Console.Write($"{elem} ");
    Console.WriteLine();
}

// Main:
int[] nums = {1, 2, 3};
string[] words = {"Ali", "Veli"};
DisplayArray(nums);
DisplayArray(words);`,
        answer: '1 2 3 \nAli Veli',
        explanation: 'Generic metot her tür için çalışır. Compiler tip çıkarımı yaparak int ve string versiyonlarını otomatik üretir.'
    },

    // ========== CLASS QUESTIONS ==========
    {
        id: 19,
        type: 'fillblank',
        topic: 'class',
        difficulty: 'hard',
        points: 10,
        question: 'Sınıf tanımını tamamlayın (sınav formatı):',
        code: `class Aday
{
    public string Isim { get; set; }
    private int oySayisi;
    public int OySayisi
    {
        get { return oySayisi; }
        set
        {
            if(value > 0)
            {
                _____ = value;
            }
        }
    }

    public Aday(string isim)
    {
        _____ = isim;
    }
}`,
        blanks: ['oySayisi', 'Isim'],
        explanation: 'Property\'nin set accessor\'ında value > 0 kontrolü ile oySayisi field\'ına atama yapılır. Constructor\'da Isim property\'sine atama yapılır.'
    },
    {
        id: 20,
        type: 'fillblank',
        topic: 'class',
        difficulty: 'hard',
        points: 10,
        question: 'Seçim sınıfını tamamlayın (sınav formatı):',
        code: `class Secim
{
    private int aktifAdaySayisi;
    private Aday[] adaylar;

    public Secim(int maxAdaySayisi)
    {
        adaylar = _____ Aday[maxAdaySayisi];
        aktifAdaySayisi = _____;
    }

    public void AdayEkle(Aday aday)
    {
        adaylar[_____] = _____;
        _____++;
    }

    public void OyKullan(Aday aday)
    {
        aday.OySayisi _____;
    }

    public void SonuclariYazdir()
    {
        foreach(Aday aday in _____)
        {
            if(_____ != null)
                Console.WriteLine("Aday: " + aday.Isim +
                    " Oy Sayisi:" + aday.OySayisi);
        }
    }
}`,
        blanks: ['new', '0', 'aktifAdaySayisi', 'aday', 'aktifAdaySayisi', '+= 1', 'adaylar', 'aday'],
        explanation: 'Bu soru vize sınavı formatında. new ile dizi oluşturma, aktifAdaySayisi ile indeksleme, += 1 ile oy artırma ve null kontrolü yapılır.'
    },
    {
        id: 21,
        type: 'concept',
        topic: 'class',
        difficulty: 'easy',
        points: 5,
        question: 'static metotlar hakkında hangisi doğrudur?',
        options: [
            'static metotlar this anahtar kelimesini kullanabilir',
            'static metotlar non-static üyelere doğrudan erişebilir',
            'static metotlar non-static üyelere doğrudan erişemez ve this kullanamaz',
            'static metotlar sadece private olabilir'
        ],
        correct: 2,
        explanation: 'static metotlar belirli bir nesneye bağlı değildir, bu yüzden this kullanamaz ve non-static üyelere doğrudan erişemez.'
    },
    {
        id: 22,
        type: 'output',
        topic: 'class',
        difficulty: 'hard',
        points: 15,
        question: 'Aşağıdaki kodun çıktısını yazın (linked list benzeri yapı - vize sınavı formatı):',
        code: `public class Element
{
    int item;
    Element next;
    public Element(int item, Element next)
    {
        this.item = item;
        this.next = next;
    }
    public override string ToString()
    {
        return item + " " + (next == null ? " " : next.ToString());
    }
}

// Main:
Element e1 = new Element(2022, null);
Element e2 = new Element(2020, e1);
Element e3 = new Element(2018, e1);
Element e4 = new Element(2016, e2);
Element e5 = new Element(2014, e3);
Console.WriteLine(e5);
Console.WriteLine(e4);`,
        answer: '2014 2018 2022  \n2016 2020 2022',
        explanation: 'e5 → e3 → e1 → null: "2014 2018 2022  "\ne4 → e2 → e1 → null: "2016 2020 2022  "\nHer element kendi item\'ını yazdırır, sonra next.ToString() çağrılır.'
    },

    // ========== ARRAY QUESTIONS ==========
    {
        id: 23,
        type: 'error',
        topic: 'array',
        difficulty: 'medium',
        points: 10,
        question: 'Bu metottaki hataları bulun ve düzeltin (vize sınavı formatı):',
        code: `public static void kareler(int[] dizi)  // Hata 1: return type void olmalı
{
    foreach (int eleman in dizi)
        eleman *= eleman;   // Hata 2: foreach değişkeni readonly!

    return dizi;             // Hata 3: void metot return yapamaz!
}`,
        answer: `Hata 1: Metot void olmalı (return dizi ile çelişir) VEYA dönüş tipi int[] olmalı
Hata 2: foreach döngü değişkeni (eleman) read-only'dir, değiştirilemez! for döngüsü kullanılmalı
Hata 3: void metot değer döndüremez

Düzeltilmiş hali:
public static void kareler(int[] dizi)
{
    for (int i = 0; i < dizi.Length; i++)
        dizi[i] *= dizi[i];
}`,
        explanation: 'foreach döngüsünde iteration variable read-only\'dir. Dizi elemanlarını değiştirmek için for döngüsü kullanılmalı.'
    },
    {
        id: 24,
        type: 'fillblank',
        topic: 'array',
        difficulty: 'medium',
        points: 8,
        question: 'Dizi işlemlerini tamamlayın:',
        code: `// Rectangular dizi tanımı
int[_____] matrix = { {1, 2, 3}, {4, 5, 6} };
int val = matrix[1_____ 2];  // 6

// Jagged dizi tanımı
int[_____][_____] jagged = new int[2][];
jagged[0] = new int[] {1, 2, 3};
jagged[1] = new int[] {4, 5};
int val2 = jagged[1]_____1];  // 5`,
        blanks: [',', ',', '', '', '['],
        explanation: 'Rectangular: [,] ve [satır, sütun]. Jagged: [][] ve [satır][sütun].'
    },

    // ========== CONTROL FLOW QUESTIONS ==========
    {
        id: 25,
        type: 'output',
        topic: 'control',
        difficulty: 'medium',
        points: 8,
        question: 'Aşağıdaki kodun çıktısını yazın:',
        code: `for (int i = 1; i <= 5; i++)
{
    if (i == 3)
        continue;
    if (i == 5)
        break;
    Console.Write(i + " ");
}`,
        answer: '1 2 4',
        explanation: 'i=1: yazdır, i=2: yazdır, i=3: continue (atla), i=4: yazdır, i=5: break (çık). Çıktı: "1 2 4 "'
    },
    {
        id: 26,
        type: 'concept',
        topic: 'control',
        difficulty: 'easy',
        points: 5,
        question: '&& ve & operatörleri arasındaki fark nedir?',
        options: [
            'Fark yoktur, ikisi de aynı işi yapar',
            '&& short-circuit yapar (ilk operand false ise ikincisi değerlendirilmez), & her iki tarafı da değerlendirir',
            '& short-circuit yapar, && yapmaz',
            '&& sadece boolean ifadelerde kullanılır, & sadece bit işlemlerinde'
        ],
        correct: 1,
        explanation: '&& (conditional AND) short-circuit evaluation yapar. & (boolean logical AND) her iki tarafı da değerlendirir.'
    },

    // ========== FILE QUESTIONS ==========
    {
        id: 27,
        type: 'concept',
        topic: 'file',
        difficulty: 'medium',
        points: 5,
        question: 'Serialization hakkında hangisi doğrudur?',
        options: [
            'Serializable sınıfların [Serializable] attribute kullanması gerekmez',
            'Binary dosyalar insan tarafından okunabilir',
            '[Serializable] attribute ile işaretlenen sınıfın tüm instance variable\'ları da serializable olmalıdır',
            'Deserialize sonucunda tip dönüşümü gerekmez'
        ],
        correct: 2,
        explanation: 'Serializable sınıfın tüm instance variable\'ları da serializable olmalıdır. Deserialize sonucunda cast gerekir.'
    },
    {
        id: 28,
        type: 'fillblank',
        topic: 'file',
        difficulty: 'medium',
        points: 8,
        question: 'Dosya stream sınıflarını eşleştirin:',
        code: `// Dosyadan metin okuma için:
_____ reader = new StreamReader("dosya.txt");

// Dosyaya metin yazma için:
_____ writer = new StreamWriter("dosya.txt");

// Dosya hem okuma hem yazma:
_____ fs = new FileStream("dosya.dat",
    FileMode.OpenOrCreate);`,
        blanks: ['StreamReader', 'StreamWriter', 'FileStream'],
        explanation: 'StreamReader metin okuma, StreamWriter metin yazma, FileStream her iki yönde binary erişim sağlar.'
    },

    // ========== MORE INHERITANCE/POLY QUESTIONS ==========
    {
        id: 29,
        type: 'output',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 15,
        question: 'Aşağıdaki polimorfik kodun çıktısını yazın:',
        code: `abstract class Hayvan
{
    public abstract string SesCikar();
    public override string ToString()
        => $"{GetType().Name} der: {SesCikar()}";
}

class Kedi : Hayvan
{
    public override string SesCikar() => "Miyav";
}

class Kopek : Hayvan
{
    public override string SesCikar() => "Hav";
}

// Main:
Hayvan[] hayvanlar = { new Kedi(), new Kopek(), new Kedi() };
foreach (Hayvan h in hayvanlar)
    Console.WriteLine(h);`,
        answer: 'Kedi der: Miyav\nKopek der: Hav\nKedi der: Miyav',
        explanation: 'Console.WriteLine otomatik ToString() çağırır. GetType().Name sınıf adını, SesCikar() polimorfik olarak doğru sesi döner.'
    },
    {
        id: 30,
        type: 'fillblank',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 12,
        question: 'Shape hiyerarşisini tamamlayın (sınav formatı):',
        code: `public _____ class Shape
{
    public _____ double GetArea();

    public override string ToString()
        => GetType().Name;
}

public class Circle : _____
{
    public double Radius { get; set; }

    public Circle(double r) { Radius = r; }

    public _____ double GetArea()
        => Math.PI * Radius * Radius;
}

public class Cube : _____
{
    public double Side { get; set; }

    public Cube(double s) { Side = s; }

    public _____ double GetArea()
        => 6 * Side * Side;

    public double GetVolume()
        => Side * Side * Side;
}`,
        blanks: ['abstract', 'abstract', 'Shape', 'override', 'Shape', 'override'],
        explanation: 'Shape abstract sınıf, GetArea abstract metot. Circle ve Cube Shape\'den türer ve GetArea\'yı override eder.'
    },

    // ========== ADDITIONAL EXAM-STYLE QUESTIONS ==========
    {
        id: 31,
        type: 'fillblank',
        topic: 'generic',
        difficulty: 'hard',
        points: 10,
        question: 'Generic metot ile List kullanımını tamamlayın:',
        code: `// List oluşturma ve kullanma
var liste = new List<_____ > { "elma", "armut", "muz" };
liste._____ ("portakal");     // Sona ekle
liste._____ (0, "çilek");     // Başa ekle
int adet = liste._____;       // Eleman sayısı
liste._____ ("armut");         // Eleman sil`,
        blanks: ['string', 'Add', 'Insert', 'Count', 'Remove'],
        explanation: 'List<T> generic koleksiyondur. Add sona ekler, Insert belirtilen konuma ekler, Count eleman sayısını verir, Remove elemanı siler.'
    },
    {
        id: 32,
        type: 'concept',
        topic: 'class',
        difficulty: 'medium',
        points: 5,
        question: 'const ve readonly arasındaki fark nedir?',
        options: [
            'Fark yoktur, ikisi de aynı işi yapar',
            'const derleme zamanında atanmalı, readonly constructor\'da atanabilir',
            'readonly derleme zamanında atanmalı, const çalışma zamanında atanabilir',
            'const sadece string tipinde kullanılabilir'
        ],
        correct: 1,
        explanation: 'const derleme zamanında (compile-time) atanmalı. readonly constructor\'da veya bildirimde atanabilir (execution-time).'
    },
    {
        id: 33,
        type: 'output',
        topic: 'inheritance',
        difficulty: 'hard',
        points: 15,
        question: 'Constructor zincirleme çıktısını yazın:',
        code: `class Base
{
    public Base()
    {
        Console.Write("Base ");
    }
    public Base(int x) : this()
    {
        Console.Write($"Base({x}) ");
    }
}

class Derived : Base
{
    public Derived() : base(5)
    {
        Console.Write("Derived ");
    }
}

// Main:
Derived d = new Derived();`,
        answer: 'Base Base(5) Derived',
        explanation: 'new Derived() → Derived() çağırır base(5) ile → Base(int x) çağırır this() ile → Base() çalışır "Base " → Base(int x) devam "Base(5) " → Derived() devam "Derived "'
    },
    {
        id: 34,
        type: 'fillblank',
        topic: 'interface',
        difficulty: 'hard',
        points: 12,
        question: 'Payable interface ve Employee/Tax sınıflarını tamamlayın:',
        code: `public interface Payable
{
    void _____();
}

public class Employee : _____
{
    public string Name { get; set; }
    public decimal MonthlySalary { get; set; }

    public void Pay()
    {
        Console.WriteLine($"{Name}: {MonthlySalary} TL ödendi");
    }
}

public class Tax : _____
{
    public int Year { get; set; }
    public decimal Amount { get; set; }
    public bool IsPaid { get; set; }

    public void Pay()
    {
        IsPaid = _____;
        Console.WriteLine($"{Year} vergi: {Amount} TL ödendi");
    }
}

// Polimorfik kullanım:
_____[] items = { new Employee(), new Tax() };
foreach (var item in items)
    item.Pay();`,
        blanks: ['Pay', 'Payable', 'Payable', 'true', 'Payable'],
        explanation: 'Payable interface\'i Pay metodunu tanımlar. Employee ve Tax farklı sınıflar olmasına rağmen aynı interface üzerinden polimorfik olarak kullanılabilir.'
    },
    {
        id: 35,
        type: 'concept',
        topic: 'polymorphism',
        difficulty: 'hard',
        points: 8,
        question: 'Aşağıdaki atamalardan hangisi derleme hatası verir?',
        options: [
            'Employee emp = new SalariedEmployee("Ali", 5000);',
            'SalariedEmployee sal = new SalariedEmployee("Ali", 5000);',
            'SalariedEmployee sal = new Employee("Ali");  // Employee abstract',
            'A ve C'
        ],
        correct: 3,
        explanation: 'A: Upcasting, güvenli. B: Normal atama. C: İKİ hata - Employee abstract olduğu için new ile oluşturulamaz VE taban sınıf referansı türeyen sınıfa atanamaz (downcast gerekir).'
    }
];

// ============================================
// EXAM SIMULATION QUESTIONS
// ============================================

const EXAM_QUESTIONS = [
    {
        num: 1,
        points: 25,
        title: 'Sınıf Hiyerarşisi ve Boşluk Doldurma',
        description: 'Aşağıda verilen sınıf kodlarındaki boşlukları doldurun. Employee abstract sınıfından türeyen HourlyEmployee sınıfını tamamlayın.',
        code: `public ___①___ class Employee
{
    public string FirstName { get; }
    public string LastName { get; }

    public Employee(string first, string last)
    {
        FirstName = first;
        LastName = last;
    }

    public ___②___ decimal Earnings();

    public ___③___ string ToString()
        => $"{FirstName} {LastName}";
}

public class HourlyEmployee : ___④___
{
    public decimal Wage { get; set; }
    public decimal Hours { get; set; }

    public HourlyEmployee(string first, string last,
        decimal wage, decimal hours)
        : ___⑤___(first, last)
    {
        Wage = wage;
        Hours = hours;
    }

    public ___⑥___ decimal Earnings()
    {
        if (Hours <= 40)
            return Wage * Hours;
        else
            return 40 * Wage + (Hours - 40) * Wage * 1.5M;
    }

    public ___⑦___ string ToString()
        => $"hourly employee: {___⑧___.ToString()}\\n"
         + $"wage: {Wage}; hours: {Hours}";
}`,
        blanks: [
            { num: 1, answer: 'abstract', hint: 'Soyut sınıf anahtar kelimesi' },
            { num: 2, answer: 'abstract', hint: 'Gövdesi olmayan metot' },
            { num: 3, answer: 'override', hint: 'object.ToString() yeniden tanımlanıyor' },
            { num: 4, answer: 'Employee', hint: 'Hangi sınıftan türüyor?' },
            { num: 5, answer: 'base', hint: 'Taban sınıf constructor çağrısı' },
            { num: 6, answer: 'override', hint: 'Abstract metodu uygulama' },
            { num: 7, answer: 'override', hint: 'ToString yeniden tanımlanıyor' },
            { num: 8, answer: 'base', hint: 'Taban sınıf metodu çağrısı' }
        ]
    },
    {
        num: 2,
        points: 20,
        title: 'Kod Çıktısı',
        description: 'Aşağıdaki kodun ekran çıktısını yazın.',
        code: `abstract class Vehicle
{
    public abstract string Type();
    public virtual void Info()
    {
        Console.WriteLine($"Vehicle: {Type()}");
    }
}

class Car : Vehicle
{
    string model;
    public Car(string m) { model = m; }
    public override string Type() => "Car";
    public override void Info()
    {
        base.Info();
        Console.WriteLine($"Model: {model}");
    }
}

class Truck : Vehicle
{
    int tonnage;
    public Truck(int t) { tonnage = t; }
    public override string Type() => "Truck";
    public override void Info()
    {
        Console.WriteLine($"Truck {tonnage}T");
    }
}

// Main:
Vehicle[] vehicles = { new Car("BMW"), new Truck(18), new Car("Audi") };
foreach (Vehicle v in vehicles)
{
    v.Info();
    Console.WriteLine("---");
}`,
        answer: `Vehicle: Car
Model: BMW
---
Truck 18T
---
Vehicle: Car
Model: Audi
---`
    },
    {
        num: 3,
        points: 20,
        title: 'Interface ve Generic Boşluk Doldurma',
        description: 'IShape interface\'ini ve generic metodu tamamlayın.',
        code: `public ___①___ IShape
{
    double GetArea();
    string Name { get; }
}

public class Rectangle : ___②___
{
    public double Width { get; set; }
    public double Height { get; set; }
    public string Name => "Rectangle";

    public Rectangle(double w, double h)
    {
        Width = w;
        Height = h;
    }

    public double GetArea() => Width * Height;
}

public class Circle : ___③___
{
    public double Radius { get; set; }
    public string Name => "Circle";

    public Circle(double r) { Radius = r; }

    public double GetArea() => Math.PI * Radius * Radius;
}

// Generic metot - en büyük alanlı şekli bul
static T FindLargest<T>(T[] shapes) ___④___ T : ___⑤___
{
    T largest = shapes[0];
    for (int i = 1; i < shapes.Length; i++)
    {
        if (shapes[i].GetArea() > largest.GetArea())
            largest = shapes[i];
    }
    return largest;
}`,
        blanks: [
            { num: 1, answer: 'interface', hint: 'Arayüz tanımlama' },
            { num: 2, answer: 'IShape', hint: 'Rectangle hangi interface\'i uyguluyor?' },
            { num: 3, answer: 'IShape', hint: 'Circle hangi interface\'i uyguluyor?' },
            { num: 4, answer: 'where', hint: 'Tip kısıtlaması anahtar kelimesi' },
            { num: 5, answer: 'IShape', hint: 'T hangi interface\'i uygulamalı?' }
        ]
    },
    {
        num: 4,
        points: 15,
        title: 'Hata Bulma ve Düzeltme',
        description: 'Aşağıdaki kodda 5 hata bulun ve düzeltin.',
        code: `abstract class Animal
{
    public abstract void Speak();
}

class Dog : Animal
{
    // Hata 1: abstract metot override edilmemiş
    public void Speak()
    {
        Console.WriteLine("Hav!");
    }
}

class Cat : Animal
{
    public override void Speak()
    {
        Console.WriteLine("Miyav!");
    }
}

// Main:
Animal a = new Animal();          // Hata 2
Dog d = new Cat();                // Hata 3
Animal[] animals = { new Dog(), new Cat() };
foreach (Animal animal in animals)
{
    animal.speak();               // Hata 4
}
Cat c = animals[0];               // Hata 5`,
        answer: `Hata 1: "public void Speak()" → "public override void Speak()" 
         (override anahtar kelimesi eksik)
Hata 2: "new Animal()" → Abstract sınıf new ile oluşturulamaz!
Hata 3: "Dog d = new Cat()" → Cat, Dog'un alt sınıfı değil!
         "Animal d = new Cat()" olmalı
Hata 4: "animal.speak()" → "animal.Speak()" 
         (C# case-sensitive, büyük S olmalı)
Hata 5: "Cat c = animals[0]" → explicit cast gerekli:
         "Cat c = (Cat)animals[0];" veya
         "Cat c = animals[0] as Cat;"`
    },
    {
        num: 5,
        points: 20,
        title: 'Sınıf Tasarımı ve Kod Tamamlama',
        description: 'Aşağıdaki sınıf hiyerarşisini tamamlayın. Payable interface, Employee sınıfı ve türeyen Salesman sınıfı.',
        code: `___①___ IPayable
{
    decimal GetPaymentAmount();
}

public ___②___ class Employee : IPayable
{
    public string Name { get; }
    public decimal MonthlySalary { get; set; }

    public Employee(string name, decimal salary)
    {
        Name = name;
        MonthlySalary = salary;
    }

    public ___③___ decimal GetPaymentAmount()
        => MonthlySalary * 12;

    public ___④___ string ToString()
        => $"Employee: {Name}, Salary: {MonthlySalary}";

    // IComparable implementation
    public int CompareTo(Employee other)
        => MonthlySalary.___⑤___(other.MonthlySalary);
}

public class Salesman : ___⑥___
{
    public decimal SalesAmount { get; set; }
    public decimal CommissionRate { get; set; }

    public Salesman(string name, decimal salary,
        decimal sales, decimal rate)
        : ___⑦___(name, salary)
    {
        SalesAmount = sales;
        CommissionRate = rate;
    }

    public ___⑧___ decimal GetPaymentAmount()
        => ___⑨___.GetPaymentAmount()
         + SalesAmount * CommissionRate * 12;
}`,
        blanks: [
            { num: 1, answer: 'public interface', hint: 'Interface tanımı' },
            { num: 2, answer: 'abstract', hint: 'Soyut sınıf' },
            { num: 3, answer: 'virtual', hint: 'Override edilebilir metot' },
            { num: 4, answer: 'override', hint: 'object.ToString() yeniden tanımlanıyor' },
            { num: 5, answer: 'CompareTo', hint: 'IComparable karşılaştırma metodu' },
            { num: 6, answer: 'Employee', hint: 'Hangi sınıftan türüyor?' },
            { num: 7, answer: 'base', hint: 'Taban sınıf constructor çağrısı' },
            { num: 8, answer: 'override', hint: 'Taban sınıf metodunu yeniden tanımlama' },
            { num: 9, answer: 'base', hint: 'Taban sınıf metodu çağrısı' }
        ]
    }
];
