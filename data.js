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
                body: `<p>UML (Unified Modeling Language), yazılım sistemlerinin tasarımını <strong>görselleştirmek</strong> için yazılım mühendisliği alanında kullanılan genel amaçlı bir modelleme dilidir.</p>
                <ul>
                    <li>Yazılı bir dil değildir, <strong>grafiksel gösterimler</strong> kullanır.</li>
                    <li>1995 yılında, yazılımlarda standart bir yaklaşım oluşturmak için geliştirilmiştir.</li>
                    <li>Nesne yönelimli yazılım geliştirmenin (OOP) ve yazılım geliştirme sürecinin çok önemli bir parçasıdır.</li>
                    <li>Sistem ve yazılım geliştiricilerin yazılım sistemlerinin eserlerini belirleme, görselleştirme, oluşturma ve belgelemenin yanı sıra <strong>iş modellemesi</strong> için geliştirilen bir yöntemdir.</li>
                    <li>Büyük ve karmaşık sistemlerin modellenmesinde başarısı kanıtlanmış en iyi mühendislik uygulamalarının bir koleksiyonunu temsil eder.</li>
                </ul>
                <div class="tip-box">UML'yi kullanmak, proje ekiplerinin iletişim kurmasına, potansiyel tasarımları keşfetmesine ve yazılımın mimari tasarımını doğrulamasına yardımcı olur. Ayrıca programlama bilmeyen kişilerin bile modeli anlamasını sağlayarak ortak bir dil oluşturur.</div>`
            },
            {
                title: "🗂️ UML Çeşitleri",
                body: `<p>Yaygın olarak bilinen <strong>14 çeşit UML türü</strong> bulunmaktadır ve bunlar temel olarak iki gruba ayrılır:</p>
                <ul>
                    <li><strong>Yapısal Diyagramlar (Structure Diagrams):</strong> Modellenmekte olan sistemde nelerin bulunması gerektiğini gösterir. Sınıf (Class), Nesne (Object), Paket (Package) diyagramları bu gruba girer.</li>
                    <li><strong>Davranışsal Diyagramlar (Behavioral Diagrams):</strong> Sistemin nasıl davrandığını ve değiştiğini gösterir. Kullanım Senaryosu (Use Case), Durum (State), Aktivite (Activity) diyagramları bu gruba örnektir.</li>
                </ul>
                <div class="important-box"><strong>Class Diagram (Sınıf Diyagramı)</strong>, Structure Diagram (Yapısal Diyagramlar) altında bulunur ve tasarlanan OOP modelin herkes tarafından anlaşılabilecek yapısını göstermek için kullanılır.</div>`
            },
            {
                title: "🏗️ UML Class Diagram (Sınıf Diyagramı)",
                body: `<p>Sınıf diyagramları görsel olarak diktörtgen kutulardan oluşur ve 3 bölüme ayrılır:</p>
                <ul>
                    <li><strong>En üst bölüm:</strong> Class (Sınıf) adı yazılır.</li>
                    <li><strong>Orta bölüm:</strong> Attributes (Özellikler/Alanlar) yazılır.</li>
                    <li><strong>Alt bölüm:</strong> Methods (Metotlar/Davranışlar) yazılır.</li>
                </ul>
                <p><strong>Erişim Belirleyiciler (Access Modifiers) Gösterimi:</strong></p>
                <ul>
                    <li><span class="keyword">-</span> → private (Sadece kendi sınıfı içinden erişilebilir)</li>
                    <li><span class="keyword">+</span> → public (Her yerden erişilebilir)</li>
                    <li><span class="keyword">#</span> → protected (Kendi sınıfı ve miras alan sınıflardan erişilebilir)</li>
                    <li><span class="keyword">~</span> → internal (Sadece oluşturulan proje/assembly içerisinden erişilebilir)</li>
                    <li><span class="keyword">{readOnly}</span> → readonly (Sadece okunabilir)</li>
                    <li><strong>Altı çizili (Underlined)</strong> → static (Sınıfa ait, nesneye değil)</li>
                </ul>`
            },
            {
                title: "🔗 Sınıflar Arası İlişkilerin UML'de Gösterimi",
                body: `<ul>
                    <li><strong>Kalıtım (Inheritance):</strong> Doğrudan UML genellemesi kullanılarak modellenir. <strong>Üçgen başlı (içi boş) bir ok</strong>, bir alt sınıftan üst sınıfa doğru işaret eder.</li>
                    <li><strong>Bağlı Sınıflar (Nested Classes):</strong> UML içerme (containment) ilişkisi kullanılarak tanımlanır. İçinde <strong>artı işareti olan bir daire</strong> ile gösterilir. Dairenin ucu kapsayıcı sınıfa, diğer ucu iç sınıfa bağlanır.</li>
                    <li><strong>Kompozisyon (Composition):</strong> Bir sınıfın başka bir sınıfın alan türü olarak kullanılmasıdır (Sıkı bağlılık). İçi dolu elmas (baklava) simgesi ile gösterilir. Bu şekilde karmaşık sınıflar oluşturulabilir.</li>
                    <li><strong>Arayüzler (Interfaces):</strong> Bir sınıflandırıcıdan hangi üyelerin beklendiğini tanımlar. <strong>Noktalı çizgi</strong> ve boş üçgen ok ilişkisi kullanılarak sınıflarla ilişkilendirilir.</li>
                </ul>`
            },
            {
                title: "📦 Namespace ve Enum Kullanımı",
                body: `<p><strong>Namespace:</strong> Ortak sınıfları bir arada tutmak için kullanılan yapıdır. Kütüphane adı olarak da geçer. ` + "<code>using</code>" + ` ibaresi ile projelere dahil edilir.</p>
                <p><strong>Enum (Enumeration):</strong> Numaralandırılan değerler, adlandırılmış değerler kümesini tanımlar. Belirli öğeler için sayısal değerler tanımlanabilir. Enum'lar için genellikle UML'de ` + "<code><<enumeration>></code>" + ` bayrağı (flag) kullanılır.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Namespace: Ortak sınıfları gruplamak için</span>
<span class="code-keyword">namespace</span> <span class="code-type">MyLibrary</span>
{
    <span class="code-comment">// Enum kullanımı</span>
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
    
    <span class="code-comment">// Miras alma (Inheritance) örneği</span>
    <span class="code-keyword">public class</span> <span class="code-type">Student</span> : <span class="code-type">Person</span>
    {
        <span class="code-keyword">public override void</span> <span class="code-method">doWork</span>() 
        {
            Console.WriteLine(<span class="code-string">"Öğrenci ders çalışıyor."</span>);
        }
    }
}</pre></div>
                <div class="tip-box">Visual Studio'da UML diyagramları oluşturmak için Visual Studio Installer üzerinden "Class Designer" (Sınıf Tasarımcısı) eklentisini kurabilirsiniz.</div>`
            }
        ]
    },

    // ===== TOPIC 1: Kontrol İfadeleri 1 =====
    {
        id: 1,
        title: "Kontrol İfadeleri 1",
        subtitle: "Algoritmalar, Seçim (Selection) ve Döngü (Iteration) İfadelerine Giriş",
        content: [
            {
                title: "🧠 Algoritma ve Kontrol Akışı",
                body: `<p>Bilgisayarlar problemleri belirli bir sıraya göre eylemleri gerçekleştirerek çözerler. Bir problemi çözmek için izlenen yola <strong>algoritma</strong> denir.</p>
                <ul>
                    <li><strong>Sıralı Çalıştırma (Sequential Execution):</strong> Normalde ifadeler yazıldıkları sırayla, biri bittikten sonra diğeri çalışacak şekilde yürütülür.</li>
                    <li><strong>Kontrol Aktarımı (Transfer of Control):</strong> Belirli C# ifadeleri, çalıştırılacak bir sonraki ifadeyi belirlemenizi (sırayı değiştirmenizi) sağlar. Buna kontrol aktarımı denir.</li>
                </ul>
                <div class="tip-box">Kodlamadan önce algoritmayı tasarlamak için genellikle <strong>Pseudocode (Sözde Kod)</strong> kullanılır. Pseudocode bir programlama dili değildir, İngilizceye veya Türkçe'ye benzer bir dille mantığı kurmanızı sağlar.</div>`
            },
            {
                title: "🔀 Seçim İfadeleri (Selection Statements)",
                body: `<p>C# 3 tür seçim (karar) yapısı sunar:</p>
                <ul>
                    <li><span class="keyword">if</span> (Tek yollu seçim): Koşul doğruysa (true) çalışır, yanlışsa (false) atlanır.</li>
                    <li><span class="keyword">if...else</span> (Çift yollu seçim): Koşula göre iki farklı yoldan biri seçilip çalıştırılır.</li>
                    <li><span class="keyword">switch</span> (Çok yollu seçim): Bir ifadenin aldığı farklı değerlere göre çok sayıda işlemden birini yapar.</li>
                </ul>
                <p><strong>Koşullu Operatör (?:)</strong><br>C#'ta tek satırda if-else yazmamızı sağlayan <em>Ternary (Üçlü)</em> operatördür.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Klasik if-else</span>
<span class="code-keyword">if</span> (grade >= <span class="code-number">60</span>) 
{
    Console.WriteLine(<span class="code-string">"Geçti"</span>);
}
<span class="code-keyword">else</span> 
{
    Console.WriteLine(<span class="code-string">"Kaldı"</span>);
}

<span class="code-comment">// Koşullu operatör (Ternary ?:) ile aynı işlem</span>
Console.WriteLine(grade >= <span class="code-number">60</span> ? <span class="code-string">"Geçti"</span> : <span class="code-string">"Kaldı"</span>);</pre></div>`
            },
            {
                title: "🔁 İç İçe Geçmiş Seçimler ve Bloklar",
                body: `<p>Bir if...else yapısının içerisine başka if...else yapıları eklenebilir. Buna <strong>Nested (İç içe) if...else</strong> denir.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">if</span> (studentGrade >= <span class="code-number">90</span>) 
{
    Console.WriteLine(<span class="code-string">"A"</span>);
}
<span class="code-keyword">else if</span> (studentGrade >= <span class="code-number">80</span>) 
{
    Console.WriteLine(<span class="code-string">"B"</span>);
}
<span class="code-keyword">else if</span> (studentGrade >= <span class="code-number">70</span>)
{
    Console.WriteLine(<span class="code-string">"C"</span>);
}
<span class="code-keyword">else</span>
{
    Console.WriteLine(<span class="code-string">"F"</span>);
}</pre></div>
                <div class="important-box"><strong>Bloklar (Blocks):</strong> Süslü parantezler <code>{ }</code> arasına yazılan ifadeler bir blok oluşturur. Eğer if veya else bloğunda tek bir satır kod varsa süslü parantez kullanmak zorunlu değildir, ancak kod okunabilirliği ve hataları önlemek adına her zaman süslü parantez kullanılması tavsiye edilir (Özellikle <em>Dangling-else</em> problemini engellemek için).</div>`
            },
            {
                title: "🔄 while Döngüsü",
                body: `<p>Tekrarlama (Iteration) ifadeleri, bir koşul (loop-continuation condition) doğru kaldığı sürece bir eylemin tekrarlanmasını sağlar. <code>while</code>, <code>do...while</code>, <code>for</code> ve <code>foreach</code> döngüleri C#'ta mevcuttur.</p>
                <p><strong>Sayaç Kontrollü (Definite Iteration) vs Nöbetçi Kontrollü (Indefinite Iteration):</strong></p>
                <ul>
                    <li><strong>Sayaç Kontrollü:</strong> Döngünün kaç kez döneceği baştan bilinir. Genellikle bir sayaç değişkeni her adımda artırılır veya azaltılır.</li>
                    <li><strong>Nöbetçi Kontrollü (Sentinel-controlled):</strong> Döngünün kaç kez çalışacağı baştan bilinmez. Döngüyü sonlandırmak için özel bir "nöbetçi değer" (örneğin -1) girilmesi beklenir.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Sayaç kontrollü (10 kez çalışır)</span>
<span class="code-keyword">int</span> count = <span class="code-number">1</span>;
<span class="code-keyword">while</span> (count <= <span class="code-number">10</span>)
{
    total += grade;
    count++;
}

<span class="code-comment">// Nöbetçi kontrollü (kullanıcı -1 girene kadar çalışır)</span>
<span class="code-keyword">while</span> (grade != -<span class="code-number">1</span>)
{
    total += grade;
    grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
}</pre></div>`
            },
            {
                title: "📊 Veri Tipleri: bool ve Sayısal Varsayılanlar",
                body: `<ul>
                    <li><span class="keyword">bool</span>: C#'ta mantıksal değerleri tutan basit tiptir. Yalnızca <strong>true</strong> veya <strong>false</strong> değerlerini alabilir.</li>
                    <li><strong>Varsayılan Değerler:</strong> Metotların içindeki yerel (local) değişkenler varsayılan değer almazlar ve kullanılmadan önce ilklendirilmeleri (initialize) gerekir. Sınıf seviyesindeki değişkenlerin varsayılan değerleri şöyledir:
                        <ul>
                            <li>Sayısal tipler (<span class="keyword">int, long, float, double, decimal</span> vb.) → 0</li>
                            <li><span class="keyword">bool</span> → false</li>
                            <li><strong>Referans tipleri</strong> (string, object vb.) → null</li>
                        </ul>
                    </li>
                </ul>
                <div class="important-box"><strong>Tam Sayı Bölmesi Dikkat!</strong> İki integer (tam sayı) birbirine bölündüğünde sonuç her zaman tam sayı olur, kesirli kısım atılır (yuvarlama yapılmaz, direkt silinir). Kesirli sonucu almak için <span class="keyword">(double)</span> veya <span class="keyword">(float)</span> ile "Explicit Conversion" (Açık tür dönüşümü) yapılması gerekir. Örnek: <code>(double) total / count</code></div>`
            }
        ]
    },

    // ===== TOPIC 2: Kontrol İfadeleri 2 =====
    {
        id: 2,
        title: "Kontrol İfadeleri 2",
        subtitle: "for, do-while, switch, break, continue ve Mantıksal Operatörler",
        content: [
            {
                title: "🔁 for Döngüsü (For Iteration Statement)",
                body: `<p><code>for</code> döngüsü, bir işlemin kaç kez tekrarlanacağı önceden bilindiğinde kullanılan sayaç kontrollü bir döngüdür. Döngünün başlığı üç bölümden oluşur: <strong>İlklendirme (Initialization)</strong>, <strong>Koşul (Condition)</strong> ve <strong>Artırma/Azaltma (Increment/Decrement)</strong>.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 2'den 20'ye kadar olan çift sayıları toplama</span>
<span class="code-keyword">int</span> total = <span class="code-number">0</span>;
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = <span class="code-number">2</span>; i <= <span class="code-number">20</span>; i += <span class="code-number">2</span>)
{
    total += i;  
}
Console.WriteLine($<span class="code-string">"Toplam: {total}"</span>);

<span class="code-comment">// Farklı bir örnek: Bileşik faiz hesabı</span>
<span class="code-keyword">decimal</span> principal = <span class="code-number">1000</span>; <span class="code-comment">// Ana para</span>
<span class="code-keyword">double</span> rate = <span class="code-number">0.05</span>;       <span class="code-comment">// Faiz oranı</span>

Console.WriteLine(<span class="code-string">"Yıl\tMiktar"</span>);
<span class="code-keyword">for</span> (<span class="code-keyword">int</span> year = <span class="code-number">1</span>; year <= <span class="code-number">10</span>; year++)
{
    <span class="code-keyword">decimal</span> amount = principal * (<span class="code-keyword">decimal</span>)Math.Pow(<span class="code-number">1.0</span> + rate, year);
    Console.WriteLine($<span class="code-string">"{year}\t{amount:C}"</span>); <span class="code-comment">// :C para birimi formatı</span>
}</pre></div>
                <div class="tip-box"><code>for</code> döngüsünün başlığındaki üç bölümden herhangi biri (veya hepsi) boş bırakılabilir. Ancak noktalı virgüller (;) zorunludur. Örneğin <code>for (;;)</code> yazarsanız sonsuz bir döngü oluşturursunuz.</div>`
            },
            {
                title: "🔃 do...while Döngüsü",
                body: `<p><code>while</code> döngüsünden farklı olarak, <code>do...while</code> döngüsü koşul test edilmeden önce bloğun <strong>en az bir kez</strong> çalıştırılmasını garanti eder. Koşul kontrolü döngünün sonunda yapılır.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">int</span> num;
<span class="code-keyword">do</span>
{
    Console.Write(<span class="code-string">"Menüden çıkmak için 0 girin: "</span>);
    num = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
} <span class="code-keyword">while</span> (num != <span class="code-number">0</span>);</pre></div>
                <div class="important-box"><code>do...while</code> yapısının sonunda (koşulun bittiği parantezden sonra) noktalı virgül (<code>;</code>) koymak zorunludur. Aksi halde derleme (syntax) hatası alırsınız.</div>`
            },
            {
                title: "🔀 switch Çok Yollu Karar İfadesi",
                body: `<p>Uzun ve karmaşık if-else zincirleri yerine, bir değişkenin alabileceği farklı değerlere (case) göre dallanma yapmak için <code>switch</code> ifadesi kullanılır.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">int</span> grade = <span class="code-keyword">int</span>.Parse(Console.ReadLine());
<span class="code-keyword">switch</span> (grade / <span class="code-number">10</span>) <span class="code-comment">// Notu 10'a bölerek onluk dilimi bul</span>
{
    <span class="code-keyword">case</span> <span class="code-number">10</span>:
    <span class="code-keyword">case</span> <span class="code-number">9</span>:
        Console.WriteLine(<span class="code-string">"A - Mükemmel"</span>); 
        <span class="code-keyword">break</span>;
    <span class="code-keyword">case</span> <span class="code-number">8</span>:
        Console.WriteLine(<span class="code-string">"B - Çok İyi"</span>); 
        <span class="code-keyword">break</span>;
    <span class="code-keyword">default</span>:
        Console.WriteLine(<span class="code-string">"C veya daha düşük"</span>); 
        <span class="code-keyword">break</span>;
}</pre></div>
                <div class="important-box">C#'ta her <code>case</code> bloğu (eğer içi boş değilse) <code>break</code>, <code>return</code> veya <code>goto case</code> gibi bir sıçrama ifadesiyle bitmek zorundadır. Java veya C++'taki gibi alt case'lere kazara düşme (fall-through) durumuna C#'ta izin verilmez (içi tamamen boş case'ler hariç).</div>`
            },
            {
                title: "🛑 break ve continue İfadeleri",
                body: `<ul>
                    <li><strong><code>break</code>:</strong> Döngüyü (while, for, do...while) veya <code>switch</code> ifadesini derhal sonlandırır. Programın akışı döngüden (veya switch'ten) sonraki ilk ifadeden devam eder.</li>
                    <li><strong><code>continue</code>:</strong> Sadece o anki döngü adımını atlar (sonlandırır) ve döngünün bir sonraki iterasyonuna (koşul kontrolü veya artırma adımına) atlar.</li>
                </ul>`
            },
            {
                title: "🧮 Mantıksal Operatörler (Logical Operators)",
                body: `<p>Birden fazla koşulu birleştirmek için kullanılır. Hem "Short-Circuit" (kısa devre) yapan hem de yapmayan versiyonları vardır:</p>
                <ul>
                    <li><span class="keyword">&&</span> <strong>(Koşullu AND):</strong> İki koşul da true ise sonuç true. <strong>Short-circuit yapar.</strong> Yani ilk koşul false ise, ikinciye hiç bakmaz ve false döndürür.</li>
                    <li><span class="keyword">||</span> <strong>(Koşullu OR):</strong> Koşullardan biri true ise sonuç true. <strong>Short-circuit yapar.</strong> İlk koşul true ise, ikinciye bakmaz ve true döndürür.</li>
                    <li><span class="keyword">&</span> <strong>(Boolean AND):</strong> <code>&&</code> ile aynı mantıkla çalışır ancak <strong>her iki tarafı da zorunlu olarak çalıştırır ve değerlendirir.</strong> (Kısa devre yapmaz).</li>
                    <li><span class="keyword">|</span> <strong>(Boolean OR):</strong> <code>||</code> ile aynı mantıkla çalışır ancak her iki tarafı da zorunlu değerlendirir.</li>
                    <li><span class="keyword">^</span> <strong>(XOR - Özel Veya):</strong> İki taraf da farklıysa (biri true diğeri false) sonuç true olur. İkisi de aynıysa (true/true veya false/false) sonuç false olur.</li>
                    <li><span class="keyword">!</span> <strong>(NOT - Değil):</strong> Boolean bir ifadenin tersini alır. (true'yu false, false'u true yapar).</li>
                </ul>
                <div class="tip-box">Performans ve güvenlik açısından <code>&</code> ve <code>|</code> yerine genellikle <code>&&</code> ve <code>||</code> (short-circuit) versiyonları tercih edilir. Örneğin: <code>if (obj != null && obj.Value > 0)</code> kullanımında ilk koşul false olursa ikinciye bakılmaz, böylece NullReferenceException engellenmiş olur.</div>`
            }
        ]
    },

    // ===== TOPIC 3: Diziler =====
    {
        id: 3,
        title: "Diziler",
        subtitle: "Tek ve Çok Boyutlu Diziler, foreach, params, ref ve out",
        content: [
            {
                title: "📊 Dizi Temelleri (Arrays)",
                body: `<p>Diziler (Arrays), aynı türden birden fazla veriyi tek bir değişken adı altında saklamamızı sağlayan, bellek üzerinde ardışık olarak tutulan veri yapılarıdır. C#'ta diziler <strong>referans tiplerdir (reference types)</strong> ve <code>System.Array</code> sınıfından türerler.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 1. Yöntem: Sadece boyut belirterek oluşturma (Varsayılan değerlerle dolar)</span>
<span class="code-keyword">int</span>[] c = <span class="code-keyword">new int</span>[<span class="code-number">12</span>]; <span class="code-comment">// 12 elemanlı, hepsi 0</span>

<span class="code-comment">// 2. Yöntem: Array Initializer (Dizi başlatıcı) ile oluşturma</span>
<span class="code-keyword">int</span>[] values = { <span class="code-number">32</span>, <span class="code-number">27</span>, <span class="code-number">64</span>, <span class="code-number">18</span>, <span class="code-number">95</span> };

<span class="code-comment">// Dizinin boyutunu çalışma zamanında değiştirme (eski veriler korunur)</span>
Array.Resize(<span class="code-keyword">ref</span> values, <span class="code-number">10</span>);</pre></div>
                <p><strong>Varsayılan (Default) Değerler:</strong> Dizi <code>new</code> anahtar kelimesi ile oluşturulduğunda, elemanlarına otomatik olarak tipin varsayılan değeri atanır. Sayısal tipler için <code>0</code>, bool için <code>false</code>, referans tipler (string, nesneler vb.) için <code>null</code>.</p>`
            },
            {
                title: "🔄 foreach Döngüsü",
                body: `<p><code>foreach</code> döngüsü, diziler veya koleksiyonlar (List vb.) üzerinde gezinmek için en pratik yoldur. Ancak unutulmamalıdır ki <code>foreach</code> ile dizideki elemanlar <strong>sadece okunabilir (read-only)</strong>, yani döngü içinde dizinin mevcut elemanını değiştiremezsiniz.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">foreach</span> (<span class="code-keyword">int</span> val <span class="code-keyword">in</span> values)
{
    Console.WriteLine(val); <span class="code-comment">// val = 10; gibi atamalar HATA verir!</span>
}</pre></div>`
            },
            {
                title: "📐 Çok Boyutlu Diziler (Multidimensional Arrays)",
                body: `<p>C#'ta çok boyutlu diziler iki farklı şekilde oluşturulabilir: Rectangular (Dikdörtgensel) ve Jagged (Düzensiz).</p>
                <ul>
                    <li><strong>Rectangular Arrays:</strong> Her satırı aynı sayıda sütuna sahip olan düzenli matrislerdir. Virgül (<code>,</code>) kullanılarak tanımlanır. Örneğin: <code>int[,]</code></li>
                    <li><strong>Jagged Arrays (Array of arrays):</strong> Dizilerin dizisidir. Her bir satırı farklı uzunlukta olabilir. İç içe köşeli parantez (<code>[][]</code>) kullanılarak tanımlanır.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 1. Rectangular (Düzenli) Dizi</span>
<span class="code-keyword">int</span>[,] b = { {<span class="code-number">1</span>, <span class="code-number">2</span>}, {<span class="code-number">3</span>, <span class="code-number">4</span>} };
<span class="code-keyword">int</span> val = b[<span class="code-number">0</span>, <span class="code-number">1</span>]; <span class="code-comment">// 1. satır, 2. sütun -> Değer: 2</span>

<span class="code-comment">// 2. Jagged (Düzensiz) Dizi</span>
<span class="code-keyword">int</span>[][] jagged = <span class="code-keyword">new int</span>[<span class="code-number">3</span>][]; <span class="code-comment">// 3 satırlı</span>
jagged[<span class="code-number">0</span>] = <span class="code-keyword">new int</span>[] { <span class="code-number">1</span>, <span class="code-number">2</span> };
jagged[<span class="code-number">1</span>] = <span class="code-keyword">new int</span>[] { <span class="code-number">3</span> };
jagged[<span class="code-number">2</span>] = <span class="code-keyword">new int</span>[] { <span class="code-number">4</span>, <span class="code-number">5</span>, <span class="code-number">6</span> };

<span class="code-keyword">int</span> val2 = jagged[<span class="code-number">2</span>][<span class="code-number">1</span>]; <span class="code-comment">// 3. satırın 2. elemanı -> Değer: 5</span></pre></div>`
            },
            {
                title: "📤 Metotlara Dizi Göndermek (Pass By Value/Reference)",
                body: `<p>C#'ta diziler referans tipidir. Metoda bir dizi parametre olarak gönderildiğinde, dizinin kopyası değil, <strong>bellekteki adresinin (referansının) kopyası</strong> gönderilir (Pass by value of reference). Yani metot içinde dizinin bir elemanı değiştirilirse, orijinal dizi de değişir. Ancak metoda gönderilen diziye metot içinde yepyeni bir dizi (<code>new int[]</code>) atanırsa bu dışarıyı etkilemez.</p>
                <div class="tip-box">Eğer metot içinde diziye tamamen yeni bir <code>new array</code> atanmasının (referans değişikliğinin) orijinal değişkeni de etkilemesini istiyorsanız, parametrenin başına <code>ref</code> anahtar kelimesi koymalısınız.</div>`
            },
            {
                title: "✨ params Anahtar Kelimesi",
                body: `<p><code>params</code>, bir metoda <strong>değişken sayıda parametre</strong> göndermenizi sağlayan çok kullanışlı bir anahtar kelimedir. Gönderilen elemanlar otomatik olarak bir diziye dönüştürülür.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">static double</span> <span class="code-method">Average</span>(<span class="code-keyword">params double</span>[] values)
{
    <span class="code-keyword">if</span> (values.Length == <span class="code-number">0</span>) <span class="code-keyword">return</span> <span class="code-number">0</span>;
    <span class="code-keyword">double</span> total = <span class="code-number">0</span>;
    <span class="code-keyword">foreach</span> (<span class="code-keyword">double</span> val <span class="code-keyword">in</span> values) total += val;
    <span class="code-keyword">return</span> total / values.Length;
}

<span class="code-comment">// Kullanım: İster dizi gönderin, ister yan yana değer yazın</span>
<span class="code-keyword">double</span> avg1 = Average(<span class="code-number">1.0</span>, <span class="code-number">2.0</span>, <span class="code-number">3.0</span>); <span class="code-comment">// 3 parametre</span>
<span class="code-keyword">double</span> avg2 = Average(<span class="code-number">5.0</span>, <span class="code-number">10.0</span>);      <span class="code-comment">// 2 parametre</span></pre></div>
                <div class="important-box">Kurallar: 1) Bir metotta sadece bir tane <code>params</code> kullanılabilir. 2) <code>params</code> parametresi mutlaka parametre listesinin <strong>en sonunda</strong> yer almalıdır.</div>`
            }
        ]
    },

    // ===== TOPIC 4: Sınıflar ve Nesneler =====
    {
        id: 4,
        title: "Sınıflar ve Nesneler",
        subtitle: "Nesne Yönelimli Programlamanın Temelleri: Sınıflar, Kurucular, this, static, readonly, Composition",
        content: [
            {
                title: "🏛️ Sınıf (Class) ve Nesne (Object) Temelleri",
                body: `<p>Nesne Yönelimli Programlamada (OOP), <strong>Sınıf (Class)</strong> bir nesnenin taslağı (blueprint) veya şablonudur. <strong>Nesne (Object)</strong> ise bu sınıftan üretilmiş somut bir örnektir (instance).</p>
                <ul>
                    <li>Sınıflar veri (özellikler/alanlar) ve bu veriyi işleyen metotları (davranışları) tek bir birim altında toplar. Buna <strong>Kapsülleme (Encapsulation)</strong> denir.</li>
                    <li>Sınıf üyelerine erişimi kontrol etmek için <strong>Erişim Belirleyiciler (Access Modifiers)</strong> kullanılır:</li>
                </ul>
                <table style="width:100%; border-collapse: collapse; margin-bottom: 15px;">
                    <tr style="background: rgba(108,92,231,0.1);">
                        <th style="padding: 8px; border: 1px solid var(--border);">Belirleyici</th>
                        <th style="padding: 8px; border: 1px solid var(--border);">Açıklama</th>
                    </tr>
                    <tr><td style="padding: 8px; border: 1px solid var(--border);"><span class="keyword">public</span></td><td style="padding: 8px; border: 1px solid var(--border);">Her yerden sınırsız erişilebilir.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid var(--border);"><span class="keyword">private</span></td><td style="padding: 8px; border: 1px solid var(--border);">Yalnızca tanımlandığı sınıfın <strong>içinden</strong> erişilebilir. (Varsayılan değerdir)</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid var(--border);"><span class="keyword">protected</span></td><td style="padding: 8px; border: 1px solid var(--border);">Tanımlandığı sınıfın içinden ve bu sınıftan <strong>miras alan (türeyen)</strong> sınıflardan erişilebilir.</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid var(--border);"><span class="keyword">internal</span></td><td style="padding: 8px; border: 1px solid var(--border);">Sadece aynı Assembly (Proje) içinden erişilebilir.</td></tr>
                </table>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time1</span>
{
    <span class="code-comment">// Auto-implemented properties (Otomatik özellikler)</span>
    <span class="code-keyword">public int</span> Hour { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Minute { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Second { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// Expression-bodied method (İfade gövdeli metot => )</span>
    <span class="code-keyword">public string</span> <span class="code-method">ToUniversalString</span>() =>
        $<span class="code-string">"{Hour:D2}:{Minute:D2}:{Second:D2}"</span>;
}</pre></div>`
            },
            {
                title: "🔐 Property Mekanizması (get / set) Detaylı",
                body: `<p>C#'ta <strong>Property (Özellik)</strong>, sınıfın private alanlarına kontrollü erişim sağlayan yapılardır. Dışarıdan bakıldığında bir değişken gibi kullanılır (<code>obj.Name = "Ali"</code>) ama arka planda aslında <code>get</code> ve <code>set</code> adında iki metot çalışır.</p>
                <ul>
                    <li><strong>Auto-Implemented Property:</strong> <code>public int X { get; set; }</code> yazarsanız, C# arka planda private bir alan oluşturur ve get/set metotlarını otomatik bağlar.</li>
                    <li><strong>Full Property (Manuel Gövdeli):</strong> Gelen değeri kontrol etmek istiyorsanız (örn: yaşın negatif olmaması) get/set gövdesini kendiniz yazarsınız.</li>
                    <li><strong>Read-Only Property:</strong> Sadece <code>get</code> tanımlanırsa dışarıdan değer atanamaz (sadece constructor içinden atanabilir).</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Account</span>
{
    <span class="code-keyword">private decimal</span> balance; <span class="code-comment">// Gizli backing field</span>

    <span class="code-comment">// Full Property: Dışarıdan negatif bakiye atamasını engelle</span>
    <span class="code-keyword">public decimal</span> Balance
    {
        <span class="code-keyword">get</span> { <span class="code-keyword">return</span> balance; } <span class="code-comment">// Değeri oku (obj.Balance dediğinde burası çalışır)</span>
        <span class="code-keyword">set</span>
        {
            <span class="code-comment">// 'value' anahtar kelimesi dışarıdan gelen değeri temsil eder</span>
            <span class="code-keyword">if</span> (value >= <span class="code-number">0</span>)
                balance = value;
            <span class="code-keyword">else</span>
                Console.WriteLine(<span class="code-string">"Bakiye negatif olamaz!"</span>);
        }
    }

    <span class="code-comment">// Read-Only Property: Sadece get tanımlı, set yok</span>
    <span class="code-keyword">public string</span> AccountType { <span class="code-keyword">get</span>; } = <span class="code-string">"Standart"</span>;
}

<span class="code-comment">// Kullanım:</span>
<span class="code-type">Account</span> acc = <span class="code-keyword">new</span> <span class="code-type">Account</span>();
acc.Balance = <span class="code-number">5000</span>;  <span class="code-comment">// set çalışır, kontrol yapılır</span>
acc.Balance = -<span class="code-number">100</span>;  <span class="code-comment">// "Bakiye negatif olamaz!" yazar, atamaz</span>
Console.WriteLine(acc.Balance); <span class="code-comment">// get çalışır, 5000 yazar</span></pre></div>
                <div class="tip-box"><code>value</code> anahtar kelimesi, set bloğu içinde dışarıdan atanan değeri temsil eden özel bir anahtar kelimedir. Siz tanımlamadan C# otomatik sağlar.</div>`
            },
            {
                title: "🔧 Constructor (Kurucu Metot) ve this Anahtar Kelimesi",
                body: `<p><strong>Constructor (Kurucu Metot):</strong> Sınıftan <code>new</code> anahtar kelimesi ile yeni bir nesne yaratıldığında otomatik olarak çalışan özel metottur. Nesnenin başlangıç durumunu (ilklendirme) ayarlamak için kullanılır.</p>
                <ul>
                    <li>Constructor'ın adı <strong>sınıfın adıyla birebir aynı</strong> olmalıdır.</li>
                    <li><strong>Geri dönüş tipi yoktur</strong> (<code>void</code> bile yazılamaz).</li>
                    <li>Sınıfta hiç constructor tanımlamazsanız, derleyici otomatik olarak içi boş bir <strong>varsayılan (default/parametresiz) constructor</strong> oluşturur. Ancak parametreli bir constructor tanımlarsanız, derleyici artık varsayılanı oluşturmaz.</li>
                    <li><strong>Constructor Overloading:</strong> Bir sınıfta farklı parametre listelerine sahip birden fazla constructor tanımlanabilir. <code>this(...)</code> ile bir constructor'dan diğerini çağırabilirsiniz.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Time2</span>
{
    <span class="code-keyword">private int</span> hour;
    <span class="code-keyword">private int</span> minute;
    <span class="code-keyword">private int</span> second;

    <span class="code-comment">// Parametresiz constructor: this(...) ile 3 parametreli olanı çağırır</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>() : <span class="code-keyword">this</span>(<span class="code-number">0</span>, <span class="code-number">0</span>, <span class="code-number">0</span>) { }

    <span class="code-comment">// Sadece saat alan constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-keyword">int</span> hour) : <span class="code-keyword">this</span>(hour, <span class="code-number">0</span>, <span class="code-number">0</span>) { }

    <span class="code-comment">// Ana (3 parametreli) constructor</span>
    <span class="code-keyword">public</span> <span class="code-method">Time2</span>(<span class="code-keyword">int</span> hour, <span class="code-keyword">int</span> minute, <span class="code-keyword">int</span> second)
    {
        <span class="code-comment">// this: o an üzerinde çalışılan mevcut nesneyi gösterir</span>
        <span class="code-comment">// Parametre adları ile alan adları aynı olduğunda ayrım yapmak için kullanılır</span>
        <span class="code-keyword">this</span>.hour = hour;     
        <span class="code-keyword">this</span>.minute = minute;
        <span class="code-keyword">this</span>.second = second;
    }
}

<span class="code-comment">// Farklı constructor'ları çağırarak nesne oluşturma:</span>
<span class="code-type">Time2</span> t1 = <span class="code-keyword">new</span> <span class="code-type">Time2</span>();            <span class="code-comment">// 00:00:00</span>
<span class="code-type">Time2</span> t2 = <span class="code-keyword">new</span> <span class="code-type">Time2</span>(<span class="code-number">14</span>);           <span class="code-comment">// 14:00:00</span>
<span class="code-type">Time2</span> t3 = <span class="code-keyword">new</span> <span class="code-type">Time2</span>(<span class="code-number">14</span>, <span class="code-number">30</span>, <span class="code-number">45</span>);  <span class="code-comment">// 14:30:45</span></pre></div>`
            },
            {
                title: "🔄 Metot Aşırı Yükleme (Method Overloading)",
                body: `<p><strong>Overloading (Aşırı Yükleme)</strong>, aynı sınıfta <strong>aynı isimde ama farklı parametre listesine</strong> sahip birden fazla metot tanımlamaktır. C# derleyicisi çağrı anında gönderilen argümanlara bakarak doğru metodu seçer.</p>
                <ul>
                    <li>Metotlar <strong>parametre sayısı</strong> veya <strong>parametre tipleri</strong> bakımından farklılaşmalıdır.</li>
                    <li>Sadece geri dönüş tipinin farklı olması yeterli değildir — derleme hatası alırsınız!</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Hesapla</span>
{
    <span class="code-comment">// Aynı isim, farklı parametre sayısı → Overloading</span>
    <span class="code-keyword">public int</span> <span class="code-method">Topla</span>(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b) => a + b;
    <span class="code-keyword">public int</span> <span class="code-method">Topla</span>(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b, <span class="code-keyword">int</span> c) => a + b + c;

    <span class="code-comment">// Aynı isim, farklı parametre tipi → Overloading</span>
    <span class="code-keyword">public double</span> <span class="code-method">Topla</span>(<span class="code-keyword">double</span> a, <span class="code-keyword">double</span> b) => a + b;
}

<span class="code-type">Hesapla</span> h = <span class="code-keyword">new</span> <span class="code-type">Hesapla</span>();
h.Topla(<span class="code-number">3</span>, <span class="code-number">5</span>);        <span class="code-comment">// int, int → ilk metot çalışır</span>
h.Topla(<span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span>);     <span class="code-comment">// int, int, int → ikinci metot çalışır</span>
h.Topla(<span class="code-number">1.5</span>, <span class="code-number">2.3</span>);    <span class="code-comment">// double, double → üçüncü metot çalışır</span></pre></div>
                <div class="important-box"><strong>Overloading ≠ Overriding!</strong> Overloading aynı sınıf içinde aynı isimde farklı parametreli metotlar tanımlamaktır. Overriding ise kalıtımda taban sınıftaki virtual/abstract metodu türeyen sınıfta yeniden yazmaktır. İkisi tamamen farklı kavramlardır!</div>`
            },
            {
                title: "📋 Object Initializer ve ToString()",
                body: `<p><strong>Object Initializer (Nesne Başlatıcı):</strong> Constructor çağrısından hemen sonra süslü parantezlerle özelliklere değer atamak için kullanılır. Kodu daha okunabilir yapar.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Klasik yöntem:</span>
<span class="code-type">Account</span> a1 = <span class="code-keyword">new</span> <span class="code-type">Account</span>();
a1.Name = <span class="code-string">"Ali"</span>;
a1.Balance = <span class="code-number">1000</span>;

<span class="code-comment">// Object Initializer ile (daha kısa ve okunabilir):</span>
<span class="code-type">Account</span> a2 = <span class="code-keyword">new</span> <span class="code-type">Account</span> { Name = <span class="code-string">"Ali"</span>, Balance = <span class="code-number">1000</span> };</pre></div>
                <p><strong>ToString() Metodu:</strong> <code>object</code> sınıfından kalıtılan bir metottur. Varsayılan olarak sınıfın tam adını (namespace + class adı) döndürür. Bu metodu <code>override</code> ederek nesnenin anlamlı bir metin temsilini döndürebilirsiniz.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Student</span>
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public int</span> Grade { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// object sınıfından gelen ToString()'i override ederek özelleştir</span>
    <span class="code-keyword">public override string</span> <span class="code-method">ToString</span>()
        => $<span class="code-string">"Öğrenci: {Name}, Not: {Grade}"</span>;
}

<span class="code-type">Student</span> s = <span class="code-keyword">new</span> <span class="code-type">Student</span> { Name = <span class="code-string">"Ali"</span>, Grade = <span class="code-number">90</span> };
Console.WriteLine(s); <span class="code-comment">// "Öğrenci: Ali, Not: 90" yazar (ToString() otomatik çağrılır)</span></pre></div>`
            },
            {
                title: "⚡ static, readonly ve const",
                body: `<ul>
                    <li><span class="keyword">static</span>: Bir üyenin sınıftan oluşturulan nesnelere değil, <strong>doğrudan sınıfın kendisine</strong> ait olmasını sağlar. Tüm nesneler <code>static</code> değişkenin aynı kopyasını paylaşır. <code>static</code> metotlar içinde <code>this</code> kullanılamaz (çünkü ortada spesifik bir nesne yoktur). Ayrıca static metotlar instance (nesne) üyelerine doğrudan erişemez.</li>
                    <li><span class="keyword">const</span> (Sabit): Değeri derleme zamanında (compile-time) belirlenmek zorundadır. Daha sonra değiştirilemez. Örtülü olarak <code>static</code> kabul edilirler. Sadece basit tipler (int, double, string vb.) const olabilir.</li>
                    <li><span class="keyword">readonly</span> (Sadece Okunabilir): Değeri ya tanımlandığı anda ya da <strong>sadece sınıfın constructor'ı içerisinde</strong> atanabilir. Çalışma zamanında (run-time) atanabilir olması yönüyle <code>const</code>'tan ayrılır. Karmaşık nesneler de readonly olabilir.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-comment">// const: Derleme zamanında belli, değiştirilemez</span>
    <span class="code-keyword">public const double</span> TaxRate = <span class="code-number">0.18</span>;

    <span class="code-comment">// static: Tüm Employee nesneleri için TEK bir kopya</span>
    <span class="code-keyword">public static int</span> Count { <span class="code-keyword">get</span>; <span class="code-keyword">private set</span>; } = <span class="code-number">0</span>;

    <span class="code-comment">// readonly: Sadece constructor'da atanabilir, sonra değişemez</span>
    <span class="code-keyword">public readonly</span> <span class="code-type">DateTime</span> CreatedAt;
    
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; } <span class="code-comment">// get-only → Implicitly readonly</span>

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> name)
    {
        Name = name;
        CreatedAt = <span class="code-type">DateTime</span>.Now; <span class="code-comment">// readonly: Sadece burada atanabilir</span>
        ++Count;
    }
}

<span class="code-comment">// const ve static erişimi → Nesne üzerinden değil, SINIF ADI üzerinden</span>
Console.WriteLine(<span class="code-type">Employee</span>.TaxRate);  <span class="code-comment">// 0.18</span>
Console.WriteLine(<span class="code-type">Employee</span>.Count);    <span class="code-comment">// 0 (henüz nesne yok)</span>
<span class="code-keyword">var</span> e = <span class="code-keyword">new</span> <span class="code-type">Employee</span>(<span class="code-string">"Ali"</span>);
Console.WriteLine(<span class="code-type">Employee</span>.Count);    <span class="code-comment">// 1</span></pre></div>`
            },
            {
                title: "🧩 Composition (Bileşim / Has-A İlişkisi)",
                body: `<p>Sınıfların, diğer sınıf nesnelerini kendi içlerinde üye (field/property) olarak barındırmasına <strong>Composition (Bileşim)</strong> denir. Bu, sınıflar arasında <strong>"has-a" (sahiptir)</strong> ilişkisi kurar. Kalıtım "is-a" (bir türüdür) ilişkisi kurarken, Composition "has-a" ilişkisi kurar.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Date</span> 
{ 
    <span class="code-keyword">public int</span> Month { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; } 
    <span class="code-keyword">public int</span> Day { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; } 
    <span class="code-keyword">public int</span> Year { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; } 
}

<span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-comment">// Employee sınıfı, Date sınıfından nesnelere SAHİPTİR (Composition)</span>
    <span class="code-comment">// "Employee has-a BirthDate" ve "Employee has-a HireDate"</span>
    <span class="code-keyword">public</span> <span class="code-type">Date</span> BirthDate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public</span> <span class="code-type">Date</span> HireDate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
}

<span class="code-comment">// Kullanım:</span>
<span class="code-keyword">var</span> emp = <span class="code-keyword">new</span> <span class="code-type">Employee</span> {
    Name = <span class="code-string">"Ali"</span>,
    BirthDate = <span class="code-keyword">new</span> <span class="code-type">Date</span> { Month = <span class="code-number">3</span>, Day = <span class="code-number">15</span>, Year = <span class="code-number">1990</span> },
    HireDate = <span class="code-keyword">new</span> <span class="code-type">Date</span> { Month = <span class="code-number">9</span>, Day = <span class="code-number">1</span>, Year = <span class="code-number">2020</span> }
};</pre></div>
                <div class="tip-box"><strong>Ne zaman Composition, ne zaman Inheritance?</strong> "Bir öğrenci bir insandır" → <strong>Inheritance (is-a)</strong>. "Bir arabanın bir motoru vardır" → <strong>Composition (has-a)</strong>. Araba motor değildir, motora sahiptir.</div>`
            },
            {
                title: "📝 List<T> Koleksiyonu ve İstisna (Exception) Yönetimi",
                body: `<p><strong>List&lt;T&gt; Koleksiyonu:</strong> C#'ta boyutları dinamik olarak değişebilen dizilere ihtiyaç duyduğumuzda <code>List&lt;T&gt;</code> generic koleksiyonunu kullanırız. Diziler gibi boyutu baştan sabit değildir.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">var</span> items = <span class="code-keyword">new</span> <span class="code-type">List</span>&lt;<span class="code-keyword">string</span>&gt; { <span class="code-string">"a"</span>, <span class="code-string">"b"</span>, <span class="code-string">"c"</span> };
items.Add(<span class="code-string">"d"</span>);        <span class="code-comment">// Sona eleman ekle</span>
items.Remove(<span class="code-string">"b"</span>);     <span class="code-comment">// Elemanı bul ve sil</span>
items.Insert(<span class="code-number">0</span>, <span class="code-string">"x"</span>);    <span class="code-comment">// Belirtilen indekse araya eleman ekle</span>
items.Contains(<span class="code-string">"c"</span>);    <span class="code-comment">// Eleman var mı? → true</span>
items.Clear();          <span class="code-comment">// Tüm elemanları sil</span>
<span class="code-keyword">int</span> cnt = items.Count;   <span class="code-comment">// Listede kaç eleman olduğunu verir (Length değil Count!)</span></pre></div>
                <p><strong>Exception Handling (İstisna Yakalama):</strong></p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">try</span>
{
    <span class="code-comment">// Hata çıkarma ihtimali olan kod buraya yazılır</span>
    <span class="code-keyword">int</span> result = <span class="code-number">10</span> / <span class="code-number">0</span>; <span class="code-comment">// DivideByZeroException!</span>
}
<span class="code-keyword">catch</span> (<span class="code-type">DivideByZeroException</span> ex) <span class="code-comment">// Spesifik hata yakala</span>
{
    Console.WriteLine(<span class="code-string">"Sıfıra bölme hatası: "</span> + ex.Message);
}
<span class="code-keyword">catch</span> (<span class="code-type">Exception</span> ex) <span class="code-comment">// Genel hata yakala (en son yazılmalı)</span>
{
    Console.WriteLine(<span class="code-string">"Beklenmeyen hata: "</span> + ex.Message);
}
<span class="code-keyword">finally</span>
{
    <span class="code-comment">// Hata olsun ya da olmasın HER ZAMAN çalışır</span>
    <span class="code-comment">// Dosya kapatma, kaynak temizleme gibi işlemler buraya yazılır</span>
    Console.WriteLine(<span class="code-string">"İşlem tamamlandı."</span>);
}</pre></div>
                <div class="important-box"><strong>Scope kuralı:</strong> <code>try</code> bloğu içinde tanımlanan bir değişkene, <code>catch</code> veya <code>finally</code> bloklarından erişilemez. Değişkeni tüm bloklarda kullanmak istiyorsanız <code>try</code> bloğunun dışında (üstünde) tanımlayın.</div>`
            }
        ]
    },

    // ===== TOPIC 5: Kalıtım (PRIORITY HIGH) =====
    {
        id: 5,
        title: "Kalıtım (Inheritance)",
        subtitle: "Temel Kavramlar: base, virtual, override, protected, new",
        content: [
            {
                title: "🧬 Kalıtım (Inheritance) Temelleri",
                body: `<p>Kalıtım (Miras alma), mevcut bir sınıfın (Base Class) özelliklerini ve davranışlarını yeni bir sınıfa (Derived Class) aktarma işlemidir. OOP'nin temel yapıtaşlarından biridir ve sınıflar arasında <strong>"is-a" (bir türüdür)</strong> ilişkisini temsil eder.</p>
                <ul>
                    <li><strong>Taban Sınıf (Base Class / Superclass):</strong> Özellikleri miras veren, genel özelliklere sahip sınıf.</li>
                    <li><strong>Türeyen Sınıf (Derived Class / Subclass):</strong> Özellikleri miras alan ve kendisine has ek özellikler barındırabilen daha spesifik sınıf.</li>
                    <li><strong>Object Sınıfı:</strong> C#'ta <em>tüm sınıflar</em> (açıkça belirtilmese bile) doğrudan veya dolaylı olarak <code>System.Object</code> sınıfından türer. Object sınıfından gelen metotlar: <code>ToString()</code>, <code>Equals()</code>, <code>GetHashCode()</code>, <code>GetType()</code>.</li>
                    <li><strong>Kalıtılan ve Kalıtılmayan Üyeler:</strong> Taban sınıfın <code>public</code> ve <code>protected</code> üyeleri türeyen sınıfa miras geçer. <code>private</code> üyeler bellekte nesnenin içinde bulunur (kalıtılır) ama türeyen sınıf metotları bunlara <em>doğrudan</em> erişemez — erişmek için taban sınıfın public/protected property veya metotları kullanılır.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Taban Sınıf (Base Class)</span>
<span class="code-keyword">public class</span> <span class="code-type">Person</span>
{
    <span class="code-keyword">public string</span> FirstName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> LastName { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    
    <span class="code-keyword">public</span> <span class="code-method">Person</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last)
    {
        FirstName = first;
        LastName = last;
    }
}

<span class="code-comment">// Türeyen Sınıf (Derived Class) - Employee "bir" Person'dır (is-a)</span>
<span class="code-keyword">public class</span> <span class="code-type">Employee</span> : <span class="code-type">Person</span>
{
    <span class="code-keyword">public decimal</span> Salary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    
    <span class="code-comment">// Türeyen sınıf constructor'ı, taban sınıf constructor'ına (base) parametreleri yollamak zorundadır</span>
    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> first, <span class="code-keyword">string</span> last, <span class="code-keyword">decimal</span> salary) : <span class="code-keyword">base</span>(first, last)
    {
        Salary = salary;
    }
}</pre></div>
                <div class="important-box"><strong>Önemli Kural: C#'ta Çoklu Kalıtım Yoktur!</strong> Bir C# sınıfı aynı anda birden fazla taban sınıftan <em>doğrudan</em> türeyemez (Örn: <code>class A : B, C</code> HATA verir). Çoklu kalıtım ihtiyacı Arayüzler (Interfaces) ile çözülür.</div>`
            },
            {
                title: "🔗 Türeyen Sınıf, base ve protected",
                body: `<ul>
                    <li><span class="keyword">protected</span>: Bir üye <code>protected</code> olarak işaretlendiğinde, bu üyeye sınıfın kendisi ve sadece o sınıftan <strong>türeyen (miras alan) sınıflar</strong> erişebilir. Dış dünyaya (diğer sınıflara) kapalıdır.</li>
                    <li><span class="keyword">base</span>: Türeyen sınıf içindeyken, taban sınıfın üyelerine (metot, özellik) ve özellikle taban sınıfın constructor'larına erişmek için kullanılan anahtar kelimedir.</li>
                </ul>
                <p><strong>Constructor Çağrı Sırası:</strong> Türeyen sınıftan nesne oluşturulduğunda, <strong>önce taban sınıfın constructor'ı</strong> çalışır, sonra türeyen sınıfın constructor'ı çalışır.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">A</span>
{
    <span class="code-keyword">public</span> <span class="code-method">A</span>() { Console.Write(<span class="code-string">"A "</span>); }
}
<span class="code-keyword">public class</span> <span class="code-type">B</span> : <span class="code-type">A</span>
{
    <span class="code-keyword">public</span> <span class="code-method">B</span>() { Console.Write(<span class="code-string">"B "</span>); }
}
<span class="code-keyword">public class</span> <span class="code-type">C</span> : <span class="code-type">B</span>
{
    <span class="code-keyword">public</span> <span class="code-method">C</span>() { Console.Write(<span class="code-string">"C "</span>); }
}

<span class="code-type">C</span> obj = <span class="code-keyword">new</span> <span class="code-type">C</span>(); <span class="code-comment">// Çıktı: "A B C" (Taban → Ara → Türeyen sırasıyla)</span></pre></div>
                <div class="tip-box">Constructor'lar miras <em>alınmazlar</em>. Bu yüzden türeyen sınıf, kendi constructor başlığında <code>base(...)</code> diyerek taban sınıfın constructor'ını çağırmalıdır. Eğer taban sınıfın parametresiz constructor'ı varsa ve <code>base()</code> yazmazsanız, C# onu otomatik çağırır.</div>`
            },
            {
                title: "🔑 Metot Ezme (Overriding): virtual ve override",
                body: `<p>Miras alınan bir metodun içeriğinin, türeyen sınıfın kendi ihtiyaçlarına göre değiştirilmesine (yeniden yazılmasına) <strong>Metot Ezme (Overriding)</strong> denir.</p>
                <ul>
                    <li><span class="keyword">virtual</span>: Taban sınıftaki bir metodun, türeyen sınıflar tarafından ezilebilmesine <em>izin vermek</em> için kullanılır. Virtual metotların bir gövdesi (varsayılan davranışı) vardır.</li>
                    <li><span class="keyword">override</span>: Türeyen sınıfta, taban sınıftan gelen <code>virtual</code> (veya abstract/override) metodu <em>ezmek (değiştirmek)</em> için kullanılır.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public virtual decimal</span> <span class="code-method">CalculateBonus</span>() 
    {
        <span class="code-keyword">return</span> <span class="code-number">1000</span>; <span class="code-comment">// Varsayılan bonus</span>
    }
}

<span class="code-keyword">public class</span> <span class="code-type">Manager</span> : <span class="code-type">Employee</span>
{
    <span class="code-comment">// Taban sınıftaki metodu kendi mantığına göre ez</span>
    <span class="code-keyword">public override decimal</span> <span class="code-method">CalculateBonus</span>()
    {
        <span class="code-comment">// base.CalculateBonus() → taban sınıftaki sonucu al (1000), üzerine 5000 ekle</span>
        <span class="code-keyword">return base</span>.CalculateBonus() + <span class="code-number">5000</span>; 
    }
}</pre></div>
                <div class="important-box"><strong>override</strong> işlemi yapabilmek için iki kural vardır: 1) Taban sınıftaki metot <span class="keyword">virtual</span>, <span class="keyword">abstract</span> veya <span class="keyword">override</span> olarak işaretlenmiş olmalı. 2) Metot imzası (isim, geri dönüş tipi ve parametreler) birebir aynı olmalı.</div>`
            },
            {
                title: "🚫 new Anahtar Kelimesi ile Metot Gizleme (Hiding)",
                body: `<p>Taban sınıftaki bir metot <code>virtual</code> olarak işaretlenmemişse ama siz türeyen sınıfta aynı isimde bir metot yazmak istiyorsanız, <code>new</code> anahtar kelimesi kullanılır. Bu, taban sınıftaki metodu <strong>gizler (hide)</strong> ama ezmez!</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Base</span>
{
    <span class="code-keyword">public void</span> <span class="code-method">Yaz</span>() { Console.Write(<span class="code-string">"Base "</span>); }
}

<span class="code-keyword">public class</span> <span class="code-type">Derived</span> : <span class="code-type">Base</span>
{
    <span class="code-comment">// new → taban sınıftaki metodu gizliyor, override ETMİYOR</span>
    <span class="code-keyword">public new void</span> <span class="code-method">Yaz</span>() { Console.Write(<span class="code-string">"Derived "</span>); }
}

<span class="code-type">Derived</span> d = <span class="code-keyword">new</span> <span class="code-type">Derived</span>();
d.Yaz(); <span class="code-comment">// "Derived" → Değişken tipi Derived, Derived'ın Yaz()'ı çalışır</span>

<span class="code-type">Base</span> b = d; <span class="code-comment">// Upcasting</span>
b.Yaz(); <span class="code-comment">// "Base" → new ile gizleme olduğu için değişkenin tipi (Base) metodu belirler!</span>
         <span class="code-comment">// override olsaydı "Derived" yazacaktı (Polimorfizm).</span></pre></div>
                <div class="important-box"><strong>new vs override Farkı:</strong>
                    <ul>
                        <li><code>override</code>: Runtime'da nesnenin <strong>gerçek tipine</strong> bakılır → Polimorfizm sağlanır.</li>
                        <li><code>new</code>: Compile-time'da <strong>değişkenin tipine</strong> bakılır → Polimorfizm <strong>SAĞLANMAZ</strong>.</li>
                    </ul>
                </div>`
            }
        ]
    },

    // ===== TOPIC 6: Çok Biçimlilik (PRIORITY HIGH) =====
    {
        id: 6,
        title: "Çok Biçimlilik (Polymorphism)",
        subtitle: "Nesnelerin Farklı Formlara Girebilmesi: abstract, sealed, upcasting, downcasting",
        content: [
            {
                title: "🎭 Çok Biçimlilik (Polymorphism) Nedir?",
                body: `<p>Polymorphism (Çok Biçimlilik), "birçok form" anlamına gelir. OOP'de, aynı taban sınıftan (Base Class) veya arayüzden (Interface) türeyen farklı nesnelerin, <strong>aynı metot çağrısına kendi türlerine özgü (farklı) tepkiler verebilmesi</strong> yeteneğidir.</p>
                <ul>
                    <li>Polymorphism, <code>virtual</code> metotlar ve bunların türeyen sınıflarda <code>override</code> edilmesiyle sağlanır.</li>
                    <li>Siz sadece taban sınıfın tipinde bir değişkene komut verirsiniz (Örn: <code>nesne.Ciz()</code>), çalışma zamanında (Runtime) nesnenin <em>gerçek türü</em> neyse o türün kendi metodu çalışır. Bu işleme <strong>Geç Bağlama (Late Binding / Dynamic Binding)</strong> denir. Derleyici hangi metodun çağrılacağına kodu derlerken değil, kod çalışırken (nesne yaratıldığında) karar verir.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Taban sınıf tipinde bir dizi oluşturalım ama içine türeyen nesneleri atalım</span>
<span class="code-type">SpaceObject</span>[] objects = <span class="code-keyword">new</span> <span class="code-type">SpaceObject</span>[<span class="code-number">3</span>];
objects[<span class="code-number">0</span>] = <span class="code-keyword">new</span> <span class="code-type">Martian</span>();   <span class="code-comment">// SpaceObject'ten türer (Çizimi: Kırmızı)</span>
objects[<span class="code-number">1</span>] = <span class="code-keyword">new</span> <span class="code-type">Venusian</span>();  <span class="code-comment">// SpaceObject'ten türer (Çizimi: Yeşil)</span>
objects[<span class="code-number">2</span>] = <span class="code-keyword">new</span> <span class="code-type">SpaceShip</span>(); <span class="code-comment">// SpaceObject'ten türer (Çizimi: Gri)</span>

<span class="code-keyword">foreach</span> (<span class="code-type">SpaceObject</span> obj <span class="code-keyword">in</span> objects)
{
    <span class="code-comment">// Polimorfik çağrı: Her biri ekrana farklı bir şey çizecektir!</span>
    <span class="code-comment">// Derleyici "obj"nin SpaceObject olduğunu sanır ama Runtime'da asıl tipin Draw() metodu çalışır.</span>
    obj.Draw();  
}</pre></div>`
            },
            {
                title: "🔷 Soyut (Abstract) Sınıflar ve Metotlar",
                body: `<p>Bazen taban sınıf o kadar geneldir ki (örneğin: Şekil, Hayvan, Çalışan), bu sınıftan doğrudan bir nesne üretmek mantıksızdır. Sadece diğer sınıflara bir "şablon" olması amacıyla <code>abstract</code> sınıflar kullanılır.</p>
                <ul>
                    <li><strong>Abstract Sınıf:</strong> <code>new</code> anahtar kelimesi ile nesnesi <strong>oluşturulamaz (instantiate edilemez)</strong>. Ancak referans değişkeni (pointer) veya dizi olarak kullanılabilir. (Örn: <code>Shape s = new Circle();</code>)</li>
                    <li><strong>Abstract Metot:</strong> Yalnızca abstract sınıfların içinde tanımlanabilir. Gövdesi <code>{}</code> yoktur. Türeyen tüm somut (concrete - abstract olmayan) sınıflar bu metodu kendi içlerinde <strong>override etmek ZORUNDADIR.</strong> Aksi halde derleme hatası alırlar.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public abstract class</span> <span class="code-type">Employee</span>
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">Employee</span>(<span class="code-keyword">string</span> name) { Name = name; }

    <span class="code-comment">// Abstract metot: Gövdesi YOKTUR (; ile biter).</span>
    <span class="code-comment">// "Her çalışanın bir kazancı vardır ama nasıl hesaplanacağını sadece alt sınıflar bilir"</span>
    <span class="code-keyword">public abstract decimal</span> <span class="code-method">Earnings</span>();
}

<span class="code-keyword">public class</span> <span class="code-type">SalariedEmployee</span> : <span class="code-type">Employee</span>
{
    <span class="code-keyword">public decimal</span> WeeklySalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-keyword">public</span> <span class="code-method">SalariedEmployee</span>(<span class="code-keyword">string</span> name, <span class="code-keyword">decimal</span> salary) : <span class="code-keyword">base</span>(name) 
    { WeeklySalary = salary; }

    <span class="code-comment">// Üst sınıfın abstract metodunu mecburen (ve kendi mantığıyla) eziyor (override)</span>
    <span class="code-keyword">public override decimal</span> <span class="code-method">Earnings</span>() => WeeklySalary;
}</pre></div>`
            },
            {
                title: "🔒 sealed (Mühürlü) Sınıflar ve Metotlar",
                body: `<p>Bazen bir sınıfın veya metodun davranışının değiştirilmesini (kalıtılmasını/ezilmesini) kesin olarak engellemek isteriz.</p>
                <ul>
                    <li><strong><code>sealed</code> Sınıf:</strong> Bir sınıf <code>sealed</code> ile işaretlenirse, o sınıftan <strong>kalıtım alınamaz</strong> (Türetilemez). Güvenlik veya performans sebepleriyle yapılır. (Örn: C#'taki <code>string</code> sınıfı sealed'dır, kendi String sınıfınızı ondan türetemezsiniz).</li>
                    <li><strong><code>sealed</code> Metot:</strong> Sadece <code>override</code> edilmiş bir metodu <code>sealed override</code> olarak işaretleyebilirsiniz. Bu durumda, hiyerarşide daha da aşağıda olan sınıflar artık o metodu ezemez (override zinciri kopar).</li>
                </ul>`
            },
            {
                title: "🔄 Tür Dönüşümleri (Upcasting, Downcasting ve is/as)",
                body: `<p>Miras ilişkisi olan sınıflar arasında referans tipi dönüşümleri yapılabilir:</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 1. Upcasting (Yukarı Çevrim - Güvenli & Otomatik)</span>
<span class="code-comment">// Türeyen nesneyi (SalariedEmployee), taban tipteki (Employee) bir değişkene atamak.</span>
<span class="code-type">Employee</span> emp = <span class="code-keyword">new</span> <span class="code-type">SalariedEmployee</span>(<span class="code-string">"Ali"</span>, <span class="code-number">1000</span>); 

<span class="code-comment">// 2. Downcasting (Aşağı Çevrim - Tehlikeli & Manuel)</span>
<span class="code-comment">// Taban tipteki (Employee) referansı, tekrar spesifik türeyen tipe (SalariedEmployee) çevirmek.</span>
<span class="code-type">SalariedEmployee</span> sal = (<span class="code-type">SalariedEmployee</span>)emp;  <span class="code-comment">// Yanlış tipse InvalidCastException fırlatır! Çöker!</span>

<span class="code-comment">// 3. Güvenli Downcasting (as Operatörü ile)</span>
<span class="code-comment">// Çevrim başarısız olursa program çökmez, 'null' değer döner.</span>
<span class="code-type">SalariedEmployee</span> sal2 = emp <span class="code-keyword">as</span> <span class="code-type">SalariedEmployee</span>;
<span class="code-keyword">if</span> (sal2 != <span class="code-keyword">null</span>) 
{ 
    <span class="code-comment">// Çevrim başarılı, sal2'yi güvenle kullan</span>
}

<span class="code-comment">// 4. En modern yöntem: is Operatörü ile Pattern Matching (C# 7.0+)</span>
<span class="code-comment">// Eğer emp gerçekten SalariedEmployee ise, hem true döner hem de 'sal3' değişkenini yaratıp içine atar.</span>
<span class="code-keyword">if</span> (emp <span class="code-keyword">is</span> <span class="code-type">SalariedEmployee</span> sal3)
{
    Console.WriteLine(sal3.WeeklySalary); <span class="code-comment">// Güvenle kullan!</span>
}</pre></div>
                <div class="tip-box">Polimorfik bir dizide (Örn: <code>Employee[]</code>) dönerken, sadece belli bir alt sınıfın nesnelerine özel bir işlem yapmak istediğinizde (örn: Sadece maaşlı çalışanlara prim vermek) <strong>Downcasting</strong> ve <code>is</code> operatörü kullanmak zorundasınız.</div>`
            }
        ]
    },

    // ===== TOPIC 7: Arayüzler (PRIORITY HIGH) =====
    {
        id: 7,
        title: "Arayüzler (Interfaces)",
        subtitle: "Sözleşmeler ve Çoklu Kalıtım: interface, IComparable, IPayable",
        content: [
            {
                title: "🔌 Arayüz (Interface) Nedir?",
                body: `<p>Arayüzler (Interfaces), bir sınıfın <strong>hangi yeteneklere sahip olması gerektiğini belirten ancak bu yeteneklerin nasıl çalışacağını (gövdesini) söylemeyen</strong> sözleşmelerdir. C#'ta <code>interface</code> anahtar kelimesiyle tanımlanırlar ve geleneksel olarak <code>I</code> harfi ile başlarlar.</p>
                <ul>
                    <li>İçindeki tüm üyeler (metot, property, event) varsayılan olarak <code>public</code> ve <code>abstract</code>'tır. Gövdeleri yoktur!</li>
                    <li>Sınıflar kalıtımda (inheritance) sadece bir taban sınıfa sahip olabilirken, <strong>istediği kadar arayüzü (interface) uygulayabilir (implement edebilir).</strong> Bu, C#'ta "Çoklu Kalıtım"ın (Multiple Inheritance) karşılığıdır.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// 1. Arayüz tanımı (Gövde yok, sadece imza var)</span>
<span class="code-keyword">public interface</span> <span class="code-type">IPayable</span>
{
    <span class="code-keyword">decimal</span> <span class="code-method">GetPaymentAmount</span>();  
}

<span class="code-comment">// 2. Arayüzü uygulayan sınıf (Sözleşmeyi imzalıyor)</span>
<span class="code-keyword">public class</span> <span class="code-type">Invoice</span> : <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public int</span> Quantity { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public decimal</span> PricePerItem { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// Sözleşmedeki metodu zorunlu olarak doldurmak zorunda</span>
    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>()
    {
        <span class="code-keyword">return</span> Quantity * PricePerItem;
    }
}

<span class="code-comment">// Hem sınıftan (Employee) türeyip hem de arayüz (IPayable) uygulayabilir</span>
<span class="code-keyword">public class</span> <span class="code-type">SalariedEmployee</span> : <span class="code-type">Employee</span>, <span class="code-type">IPayable</span>
{
    <span class="code-keyword">public decimal</span> WeeklySalary { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    
    <span class="code-comment">// IPayable metodunu uygula</span>
    <span class="code-keyword">public decimal</span> <span class="code-method">GetPaymentAmount</span>() => WeeklySalary;
}</pre></div>
                <div class="important-box">Eğer bir sınıf hem bir Base Class'tan miras alıyor hem de Interface uyguluyorsa; tanımlamada <strong>her zaman önce Base Class, sonra virgül konularak Interface'ler</strong> yazılmalıdır: <code>class A : Base, I1, I2</code></div>`
            },
            {
                title: "⚠️ Explicit Interface Implementation (Açık Arayüz Uygulaması)",
                body: `<p>Bir sınıf, <strong>aynı isimli metoda sahip iki farklı arayüzü</strong> uyguladığında çakışma olur. Bu durumu çözmek için veya bir arayüz metodunun sadece arayüz üzerinden çağrıldığında görünmesini sağlamak için <strong>Explicit Implementation</strong> kullanılır.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public interface</span> <span class="code-type">IPrinter</span> { <span class="code-keyword">void</span> Print(); }
<span class="code-keyword">public interface</span> <span class="code-type">IScanner</span> { <span class="code-keyword">void</span> Print(); }

<span class="code-keyword">public class</span> <span class="code-type">MultiFunctionDevice</span> : <span class="code-type">IPrinter</span>, <span class="code-type">IScanner</span>
{
    <span class="code-comment">// Normal (Implicit) uygulama - ikisi için de ortak çalışır</span>
    <span class="code-keyword">public void</span> <span class="code-method">Print</span>() { Console.WriteLine(<span class="code-string">"Normal Print"</span>); }

    <span class="code-comment">// Açık (Explicit) uygulama: IScanner.Print</span>
    <span class="code-comment">// Erişim belirleyici (public) ALMAZ! Sadece IScanner üzerinden erişilebilir.</span>
    <span class="code-keyword">void</span> <span class="code-type">IScanner</span>.<span class="code-method">Print</span>() { Console.WriteLine(<span class="code-string">"Scanner Print"</span>); }
}

<span class="code-type">MultiFunctionDevice</span> device = <span class="code-keyword">new</span> <span class="code-type">MultiFunctionDevice</span>();
device.Print(); <span class="code-comment">// "Normal Print" yazar</span>

<span class="code-type">IScanner</span> scanner = device; <span class="code-comment">// Upcasting</span>
scanner.Print(); <span class="code-comment">// "Scanner Print" yazar!</span></pre></div>`
            },
            {
                title: "📊 C#'ın Kalbi: Hazır Arayüzler (IComparable, IEnumerable)",
                body: `<p>.NET kütüphanesinde sistemin çalışmasını sağlayan çok önemli hazır arayüzler bulunur.</p>
                <ul>
                    <li><strong><code>IComparable&lt;T&gt;</code>:</strong> Nesnelerinizi kendi belirlediğiniz bir kurala göre sıralamak istiyorsanız (Örn: Array.Sort), bu arayüzü uygulamalı ve <code>CompareTo()</code> metodunu yazmalısınız.</li>
                    <li><strong><code>IEnumerable&lt;T&gt;</code>:</strong> Bir sınıfın içindeki veriler üzerinde <code>foreach</code> döngüsü ile dönülebilmesini (iterasyon) sağlar. List&lt;T&gt;, Array, Dictionary gibi tüm koleksiyonlar bu arayüzü uygular!</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-keyword">public class</span> <span class="code-type">Employee</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">Employee</span>&gt;
{
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public</span> <span class="code-type">DateTime</span> BirthDate { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }

    <span class="code-comment">// IComparable arayüzünün zorunlu koştuğu metot</span>
    <span class="code-keyword">public int</span> <span class="code-method">CompareTo</span>(<span class="code-type">Employee</span> other)
    {
        <span class="code-comment">// Doğum tarihlerine göre sırala (Eskiden yeniye)</span>
        <span class="code-keyword">return this</span>.BirthDate.CompareTo(other.BirthDate);
    }
}

<span class="code-type">Employee</span>[] employees = { emp1, emp2, emp3 };
<span class="code-comment">// Array.Sort, arka planda bizim yazdığımız CompareTo metodunu çağırır!</span>
Array.Sort(employees); </pre></div>`
            },
            {
                title: "🆚 Interface vs Abstract Sınıf",
                body: `<table style="width:100%; border-collapse: collapse; margin-top: 12px; font-size: 0.95rem;">
                <tr style="background: rgba(108,92,231,0.1);">
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Özellik</th>
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Interface (Arayüz)</th>
                    <th style="padding: 12px; text-align: left; border-bottom: 1px solid var(--border);">Abstract (Soyut) Sınıf</th>
                </tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);"><strong>Metot Gövdesi</strong></td><td style="padding: 10px; border-bottom: 1px solid var(--border);">Kural olarak gövdesizdir (C# 8.0 ile Default Interface Methods gelse de temel amaç sözleşmedir).</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">İstediği kadar gövdeli (somut) ve gövdesiz (abstract) metot barındırabilir.</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);"><strong>Çoklu Kalıtım</strong></td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Bir sınıf <strong>birden fazla</strong> Interface uygulayabilir.</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Bir sınıf <strong>sadece bir tane</strong> Abstract Class'tan türeyebilir.</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);"><strong>Constructor (Kurucu)</strong></td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Barındıramaz (Durum/State tutamaz).</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ Barındırabilir.</td></tr>
                <tr><td style="padding: 10px; border-bottom: 1px solid var(--border);"><strong>Veri Alanları (Fields)</strong></td><td style="padding: 10px; border-bottom: 1px solid var(--border);">❌ Değişken/alan (field) tanımlanamaz. Sadece Auto-Property olabilir.</td><td style="padding: 10px; border-bottom: 1px solid var(--border);">✅ İstediğiniz değişkeni tanımlayabilirsiniz.</td></tr>
                <tr><td style="padding: 10px;"><strong>Temel Amacı (İlişki)</strong></td><td style="padding: 10px;">Bağımsız sınıflara ortak yetenek kazandırır: <strong>"YAPABİLİR" (Can-do)</strong>. <em>Örn: Uçabilen her şey (Kuş, Uçak, Süpermen).</em></td><td style="padding: 10px;">Akraba sınıflar arasında hiyerarşi kurar: <strong>"TÜRÜDÜR" (Is-a)</strong>. <em>Örn: Bir çeşit Hayvan (Kedi, Köpek).</em></td></tr>
                </table>`
            }
        ]
    },

    // ===== TOPIC 8: Generic Sınıflar & Koleksiyonlar (PRIORITY HIGH) =====
    {
        id: 8,
        title: "Generic Sınıflar & Koleksiyonlar",
        subtitle: "Tip Güvenliği ve Tekrar Kullanılabilirlik: Generic metot, type constraint, List<T>, Stack<T>",
        content: [
            {
                title: "🔄 Generic Metotlar",
                body: `<p>Aynı işlemi yapan ama sadece parametre tipleri farklı olan (Örn: int toplayan metot, double toplayan metot) bir sürü "aşırı yüklenmiş" (overloaded) metot yazmak yerine, <strong>tipi parametre olarak alan tek bir "Generic" (Jenerik) metot</strong> yazılır.</p>
                <ul>
                    <li>Tip parametresi, metot isminden sonra açılı parantezler <code>&lt;T&gt;</code> (T: Type) arasına yazılır.</li>
                    <li>Derleme (Compile) zamanında, T yerine hangi tipin (int, string, vb.) kullanılacağı belirlenir, böylece <strong>Tip Güvenliği (Type Safety)</strong> sağlanır.</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// T: Tip parametresi. Metot çağrılırken belli olacak.</span>
<span class="code-keyword">static void</span> <span class="code-method">DisplayArray</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span>[] arr)
{
    <span class="code-keyword">foreach</span> (<span class="code-type">T</span> element <span class="code-keyword">in</span> arr)
        Console.Write($<span class="code-string">"{element} "</span>);
    Console.WriteLine();
}

<span class="code-comment">// Kullanım</span>
<span class="code-keyword">int</span>[] intArr = { <span class="code-number">1</span>, <span class="code-number">2</span>, <span class="code-number">3</span> };
<span class="code-keyword">double</span>[] dblArr = { <span class="code-number">1.1</span>, <span class="code-number">2.2</span> };
<span class="code-keyword">string</span>[] strArr = { <span class="code-string">"Elma"</span>, <span class="code-string">"Armut"</span> };

<span class="code-comment">// C# derleyicisi gönderdiğiniz diziden 'T'nin ne olduğunu otomatik anlar (Type Inference)</span>
DisplayArray(intArr);     <span class="code-comment">// T → int olarak çalışır</span>
DisplayArray(dblArr);     <span class="code-comment">// T → double olarak çalışır</span>
DisplayArray&lt;<span class="code-keyword">string</span>&gt;(strArr); <span class="code-comment">// İstenirse '&lt;tip&gt;' açıkça yazılabilir</span></pre></div>`
            },
            {
                title: "🔒 Type Constraints (Tip Kısıtlamaları)",
                body: `<p>Generic bir metoda veya sınıfa gönderilecek 'T' tipinin rastgele herhangi bir tip olmasını engellemek, <strong>sadece belirli özelliklere sahip tiplerin</strong> gönderilmesini sağlamak için <code>where</code> anahtar kelimesiyle kısıtlamalar konur.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// T'nin mutlaka IComparable&lt;T&gt; arayüzünü uygulayan bir tip olması zorunlu!</span>
<span class="code-comment">// Aksi halde 'CompareTo' metodunu çağıramazdık.</span>
<span class="code-keyword">static</span> <span class="code-type">T</span> <span class="code-method">Maximum</span>&lt;<span class="code-type">T</span>&gt;(<span class="code-type">T</span> x, <span class="code-type">T</span> y, <span class="code-type">T</span> z) <span class="code-keyword">where</span> <span class="code-type">T</span> : <span class="code-type">IComparable</span>&lt;<span class="code-type">T</span>&gt;
{
    <span class="code-type">T</span> max = x;
    <span class="code-keyword">if</span> (y.CompareTo(max) > <span class="code-number">0</span>) max = y;
    <span class="code-keyword">if</span> (z.CompareTo(max) > <span class="code-number">0</span>) max = z;
    <span class="code-keyword">return</span> max;
}</pre></div>
                <table style="width:100%; border-collapse: collapse; margin-top: 10px; font-size: 0.95rem;">
                    <tr style="background: rgba(108,92,231,0.1);">
                        <th style="padding: 10px; border-bottom: 1px solid var(--border);">Kısıtlama</th>
                        <th style="padding: 10px; border-bottom: 1px solid var(--border);">Anlamı</th>
                    </tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid var(--border);"><code>where T : ClassName</code></td><td style="padding: 8px; border-bottom: 1px solid var(--border);">T, belirtilen sınıftan veya onun alt sınıflarından biri olmalı.</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid var(--border);"><code>where T : InterfaceName</code></td><td style="padding: 8px; border-bottom: 1px solid var(--border);">T, belirtilen arayüzü uygulayan bir tip olmalı.</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid var(--border);"><code>where T : class</code></td><td style="padding: 8px; border-bottom: 1px solid var(--border);">T, referans tipi (class, interface, delegate, array) olmalı.</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid var(--border);"><code>where T : struct</code></td><td style="padding: 8px; border-bottom: 1px solid var(--border);">T, değer tipi (int, double, bool vb.) olmalı.</td></tr>
                    <tr><td style="padding: 8px; border-bottom: 1px solid var(--border);"><code>where T : new()</code></td><td style="padding: 8px; border-bottom: 1px solid var(--border);">T'nin parametre almayan, boş bir public constructor'ı olmalı.</td></tr>
                </table>
                <div class="tip-box">Birden fazla kısıtlama yazılacaksa virgülle ayrılır: <code>where T : class, new()</code>. Eğer sıralama yapılacaksa: Önce <code>class</code> veya <code>struct</code>, sonra Sınıf Adı, sonra Arayüzler, en son <code>new()</code> yazılır.</div>`
            },
            {
                title: "📚 Kendi Generic Sınıfımızı Yazmak (Örn: Stack<T>)",
                body: `<p>C#'ın eski sürümlerinde veriler <code>object</code> tipinde tutulurdu (Örn: <code>ArrayList</code>). Bu durum veri okurken sürekli <strong>cast (tür dönüşümü)</strong> yapmayı gerektiriyor ve performansı düşürüyordu (Boxing/Unboxing işlemleri). Generic sınıflar sayesinde kendi veri yapılarımızı <strong>tip güvenli</strong> ve hızlı hale getirebiliriz.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// T tipinde elemanlar tutan kendi Yığın (Stack) sınıfımız</span>
<span class="code-keyword">public class</span> <span class="code-type">Stack</span>&lt;<span class="code-type">T</span>&gt;
{
    <span class="code-keyword">private int</span> top;
    <span class="code-keyword">private</span> <span class="code-type">T</span>[] elements;

    <span class="code-keyword">public</span> <span class="code-method">Stack</span>(<span class="code-keyword">int</span> size)
    {
        top = -<span class="code-number">1</span>;
        elements = <span class="code-keyword">new</span> <span class="code-type">T</span>[size]; <span class="code-comment">// T tipinde dizi oluştur</span>
    }

    <span class="code-keyword">public void</span> <span class="code-method">Push</span>(<span class="code-type">T</span> value) <span class="code-comment">// Yığına eleman ekle</span>
    {
        <span class="code-keyword">if</span> (top == elements.Length - <span class="code-number">1</span>) <span class="code-keyword">throw new</span> <span class="code-type">Exception</span>(<span class="code-string">"Stack Dolu"</span>);
        elements[++top] = value;
    }

    <span class="code-keyword">public</span> <span class="code-type">T</span> <span class="code-method">Pop</span>() <span class="code-comment">// Yığından eleman çıkar</span>
    {
        <span class="code-keyword">if</span> (top == -<span class="code-number">1</span>) <span class="code-keyword">throw new</span> <span class="code-type">Exception</span>(<span class="code-string">"Stack Boş"</span>);
        <span class="code-keyword">return</span> elements[top--];
    }
}

<span class="code-comment">// Sınıf nesnesi yaratırken T yerine kullanılacak gerçek tip verilir</span>
<span class="code-keyword">var</span> intStack = <span class="code-keyword">new</span> <span class="code-type">Stack</span>&lt;<span class="code-keyword">int</span>&gt;(<span class="code-number">5</span>);
intStack.Push(<span class="code-number">42</span>);
<span class="code-keyword">int</span> val = intStack.Pop(); <span class="code-comment">// Dönüş tipi otomatik int olur, cast yapmaya gerek yok!</span></pre></div>`
            },
            {
                title: "📦 Hazır Generic Koleksiyonlar (List ve Dictionary)",
                body: `<p>.NET kütüphanesinde bizim yazmamıza gerek kalmayan çok güçlü hazır Generic koleksiyonlar vardır (<code>System.Collections.Generic</code> namespace'i içinde).</p>
                <ul>
                    <li><strong><code>List&lt;T&gt;</code>:</strong> Boyutu dinamik olarak değişebilen dizidir. Dizilerdeki gibi boyut baştan sabit olmak zorunda değildir. Arka planda bir dizi kullanır, dolduğunda boyutunu otomatik 2 katına çıkarır.</li>
                    <li><strong><code>Dictionary&lt;TKey, TValue&gt;</code>:</strong> Verileri <strong>Anahtar-Değer (Key-Value)</strong> çiftleri halinde tutar. Bir "Sözlük" gibi çalışır. Anahtarlar (Key) <strong>benzersiz (unique)</strong> olmak zorundadır. Arama işlemi (Key ile value bulma) çok hızlıdır (O(1)).</li>
                </ul>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// --- List&lt;T&gt; Kullanımı ---</span>
<span class="code-type">List</span>&lt;<span class="code-keyword">string</span>&gt; names = <span class="code-keyword">new</span> <span class="code-type">List</span>&lt;<span class="code-keyword">string</span>&gt;();
names.Add(<span class="code-string">"Ali"</span>);          <span class="code-comment">// Sona ekler</span>
names.Insert(<span class="code-number">0</span>, <span class="code-string">"Veli"</span>);   <span class="code-comment">// İstenen indekse araya ekler</span>
names.Remove(<span class="code-string">"Ali"</span>);       <span class="code-comment">// Elemanı bulup siler</span>
<span class="code-keyword">int</span> elemanSayisi = names.Count; <span class="code-comment">// Array'deki Length yerine Count kullanılır.</span>

<span class="code-comment">// --- Dictionary&lt;TKey, TValue&gt; Kullanımı ---</span>
<span class="code-comment">// Key: Plaka Kodu (int), Value: Şehir Adı (string)</span>
<span class="code-type">Dictionary</span>&lt;<span class="code-keyword">int</span>, <span class="code-keyword">string</span>&gt; cities = <span class="code-keyword">new</span> <span class="code-type">Dictionary</span>&lt;<span class="code-keyword">int</span>, <span class="code-keyword">string</span>&gt;();
cities.Add(<span class="code-number">34</span>, <span class="code-string">"İstanbul"</span>);
cities.Add(<span class="code-number">06</span>, <span class="code-string">"Ankara"</span>);
<span class="code-comment">// cities.Add(34, "İzmir"); // HATA! 34 anahtarı zaten var.</span>

<span class="code-comment">// Anahtarı kullanarak değere erişim:</span>
Console.WriteLine(cities[<span class="code-number">34</span>]); <span class="code-comment">// "İstanbul" yazar</span>

<span class="code-keyword">if</span> (cities.ContainsKey(<span class="code-number">35</span>)) <span class="code-comment">// Anahtar var mı kontrolü (Çok hızlıdır)</span>
{
    Console.WriteLine(<span class="code-string">"İzmir bulundu"</span>);
}</pre></div>`
            }
        ]
    },

    // ===== TOPIC 9: Dosyalar ve Akışlar =====
    // ===== TOPIC 9: Dosyalar ve Akışlar =====
    {
        id: 9,
        title: "Dosyalar ve Akışlar (Streams)",
        subtitle: "Veri Kalıcılığı: FileStream, StreamReader/Writer, Serialization",
        content: [
            {
                title: "📁 Dosya ve Akış (Stream) Kavramları",
                body: `<p>Uygulama kapandığında verilerin (örneğin müşteri listesi, oyun skorları) silinmemesi için diskte saklanmasına <strong>Persistent Data (Kalıcı Veri)</strong> denir. C#'ta dosyalar, sonu olan bir <strong>ardışık byte akışı (Stream)</strong> olarak görülür.</p>
                <ul>
                    <li><strong><code>System.IO</code> Namespace'i:</strong> Dosya, dizin okuma/yazma işlemleri için gerekli sınıfları barındırır.</li>
                    <li><span class="keyword">Console.In</span> (Standart giriş - Klavye), <span class="keyword">Console.Out</span> (Standart çıkış - Ekran), <span class="keyword">Console.Error</span> (Standart hata çıkışı) aslında önceden tanımlanmış stream'lerdir.</li>
                </ul>
                <p><strong>Temel Stream Sınıfları:</strong></p>
                <ul>
                    <li><span class="keyword">FileStream</span>: Dosyalara byte seviyesinde veri okuma ve yazma işlemlerini yapar.</li>
                    <li><span class="keyword">MemoryStream</span>: Veriyi disk yerine bilgisayarın RAM'inde (belleğinde) tutar. Geçici ve çok hızlı işlemler için kullanılır.</li>
                    <li><span class="keyword">StreamReader / StreamWriter</span>: Dosyalardan düz metin (text) okumak veya yazmak için kullanılan, arka planda karakter kodlamalarını (UTF-8 gibi) halleden yardımcı sınıflardır.</li>
                </ul>`
            },
            {
                title: "📝 Metin (Text) Dosyalarına Yazma ve Okuma",
                body: `<div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// StreamWriter ile dosyaya metin yazma (Dosya yoksa oluşturur)</span>
<span class="code-comment">// "using" bloğu iş bitince dosyayı otomatik kapatır (Dispose eder)</span>
<span class="code-keyword">using</span> (<span class="code-type">StreamWriter</span> writer = <span class="code-keyword">new</span> <span class="code-type">StreamWriter</span>(<span class="code-string">"kisiler.txt"</span>))
{
    writer.WriteLine(<span class="code-string">"Ali Yılmaz, 25"</span>);
    writer.WriteLine(<span class="code-string">"Ayşe Demir, 30"</span>);
} <span class="code-comment">// Burada dosya güvenle kapatılır.</span>

<span class="code-comment">// StreamReader ile dosyadan metin okuma</span>
<span class="code-keyword">using</span> (<span class="code-type">StreamReader</span> reader = <span class="code-keyword">new</span> <span class="code-type">StreamReader</span>(<span class="code-string">"kisiler.txt"</span>))
{
    <span class="code-keyword">string</span> line;
    <span class="code-comment">// Dosyanın sonuna gelene kadar (null olana kadar) satır satır oku</span>
    <span class="code-keyword">while</span> ((line = reader.ReadLine()) != <span class="code-keyword">null</span>)
    {
        Console.WriteLine(line);
    }
}</pre></div>`
            },
            {
                title: "💾 Serialization (Serileştirme)",
                body: `<p><strong>Serileştirme (Serialization)</strong>, bellekteki bir nesnenin durumunu (içindeki değişkenlerin değerlerini) bir dosyaya (Binary, JSON, XML) yazılabilir bir formata dönüştürme işlemidir. <strong>Deserialization</strong> ise dosyadan okuyup tekrar nesneye çevirme işlemidir.</p>
                <div class="code-block"><span class="lang-tag">C#</span><pre><span class="code-comment">// Sınıfın serileştirilebileceğini belirtmek için [Serializable] eklenir.</span>
[<span class="code-type">Serializable</span>]
<span class="code-keyword">public class</span> <span class="code-type">Record</span>
{
    <span class="code-keyword">public int</span> Id { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-keyword">public string</span> Name { <span class="code-keyword">get</span>; <span class="code-keyword">set</span>; }
    <span class="code-comment">// Eğer bir alanın dosyaya kaydedilmesini İSTEMİYORSANIZ:</span>
    <span class="code-comment">// [NonSerialized] public string TempPassword; yazılır.</span>
}

<span class="code-comment">// --- 1. Klasik Yöntem: BinaryFormatter (Güvenlik riski taşır, eski projelerde/sınavlarda çıkar) ---</span>
<span class="code-type">Record</span> r = <span class="code-keyword">new</span> <span class="code-type">Record</span> { Id = <span class="code-number">1</span>, Name = <span class="code-string">"Ali"</span> };

<span class="code-keyword">using</span> (<span class="code-type">FileStream</span> fs = <span class="code-keyword">new</span> <span class="code-type">FileStream</span>(<span class="code-string">"data.dat"</span>, FileMode.Create))
{
    <span class="code-type">BinaryFormatter</span> formatter = <span class="code-keyword">new</span> <span class="code-type">BinaryFormatter</span>();
    formatter.Serialize(fs, r);
}

<span class="code-keyword">using</span> (<span class="code-type">FileStream</span> fs = <span class="code-keyword">new</span> <span class="code-type">FileStream</span>(<span class="code-string">"data.dat"</span>, FileMode.Open))
{
    <span class="code-type">BinaryFormatter</span> formatter = <span class="code-keyword">new</span> <span class="code-type">BinaryFormatter</span>();
    <span class="code-type">Record</span> r2 = (<span class="code-type">Record</span>)formatter.Deserialize(fs); <span class="code-comment">// Tür dönüşümü (cast) unutulmamalı!</span>
    Console.WriteLine(r2.Name); <span class="code-comment">// Çıktı: Ali</span>
}

<span class="code-comment">// --- 2. Modern Yöntem: JSON Serialization (System.Text.Json) ---</span>
<span class="code-keyword">using</span> System.Text.Json;

<span class="code-keyword">string</span> jsonString = JsonSerializer.Serialize(r); 
<span class="code-comment">// jsonString şuna benzer: {"Id":1,"Name":"Ali"}</span>
File.WriteAllText(<span class="code-string">"data.json"</span>, jsonString);

<span class="code-keyword">string</span> readJson = File.ReadAllText(<span class="code-string">"data.json"</span>);
<span class="code-type">Record</span> r3 = JsonSerializer.Deserialize&lt;<span class="code-type">Record</span>&gt;(readJson); <span class="code-comment">// Generic tip verilir!</span>
</pre></div>
                <div class="important-box">
                    <ul>
                        <li><span class="keyword">[Serializable]</span> niteliği (attribute) eklenmeyen nesneler Binary olarak serileştirilemez (SerializationException verir).</li>
                        <li>Nesne içindeki tüm alt nesneler (property'lerin tipleri) de Serializable olmak zorundadır.</li>
                        <li>Basit veri tipleri (int, double, string vb.) zaten C# tarafından otomatik Serializable'dır.</li>
                        <li>Günümüz modern uygulamalarında genellikle <strong>JSON</strong> veya <strong>XML</strong> serileştirmesi tercih edilmektedir.</li>
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
