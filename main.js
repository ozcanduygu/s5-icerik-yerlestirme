// bu satırı silmeyin
import { siteContent } from "./content.js";
console.log("Site içeriği", siteContent);

/* Kodlar buradan aşağıya */

const img = document.getElementById("logo-img");
img.src= "images/logo.webp"; 

const navLinks = document.querySelectorAll("nav a");
const metinler = [
    "Hizmetler",
    "Portföy",
    "Ekip",
    "İçgörüler",
    "Referanslar"
];

for(let i= 0; i<navLinks.length; i++){
    navLinks[i].classList.add("italic");
    navLinks[i].textContent= metinler[i];
}

const baslik = document.querySelector(".cta-text h1");
baslik.textContent="Dijital Pazarlama Uzmanı";

const buton = document.querySelector(".cta-text button");
buton.textContent = "Ücretsiz Analiz";

const ctaimg = document.getElementById("cta-img");
ctaimg.src="images/cta-img.webp"; 

/*const icerik = document.querySelector(".text-content h4");
icerik.textContent ="Çalışma Prensiplerimiz"; */

const textContents= document.querySelectorAll(".text-content");
textContents[0].querySelector("h4").textContent ="Çalışma Prensiplerimiz";
textContents[0].querySelector("p").textContent = "Her projede veri odaklı yaklaşımı benimsiyo ölçülebilir sonuçları hedefliyoruz. Müşterilerimiz sektörlerini derinlemesine analiz ederek , hedef kitlelerinin davranışlarını anlıyor ve bu doğrultuda stratejiler geliştiriyor. Şeffaf raporlama tüm kampanya performansı detaylı şekilde paylaşıyor,sürekli optimizasyon ile ROI'nizi maksimize ediyoruz."

textContents[1].querySelector("h4").textContent = "Hizmet Kapsamımız";
textContents[1].querySelector("p").textContent = "Google Ads, Facebook Ads, Instagram Ads kampanyalarından SEO ve içerik pazarlamaya, e-ticaret optimizasyonundan sosyal medya yönetimine kadar dijital pazarlamanın tüm alanlarında hizmet veriyoruz. 360 derece dijital pazarlama yaklaşımımızla markanızın online görünürlüğünü artırıyor ve satışlarınızı büyütüyoruz." ;


const ortaResim = document.getElementById("middle-img");
ortaResim.src = "./images/graphs.webp";

textContents[2].querySelector("h4").textContent ="Markanızı di̇ji̇tal dünyada başarıya taşıyoruz";
textContents[2].querySelector("p").textContent ="5 yılı aşkın tecrübemizle 500'den fazla projeyi başarıyla tamamladık. Küçük işletmelerden büyük şirketlere kadar her ölçekte müşterimize özel stratejiler geliştiriyor, dijital pazarlama hedeflerine ulaşmalarını sağlıyoruz.";

textContents[3].querySelector("h4").textContent ="Veri odaklı yaklaşım - ölçülebilir sonuçlar";
textContents[3].querySelector("p").textContent ="Her kampanyamızı detaylı analiz ve araştırma ile başlatıyor sürekli A/B test yaparak optimum performansı yakalıyoruz. Gerçek zamanlı raporlama sistemimizle kampanya performanslarını şeffaf şekilde paylaşıyor, hedeflenen KPI'ları tutturmak için sürekli iyileştirmeler yapıyoruz.";

textContents[4].querySelector("h4").textContent = "Sizin için özel stratejiler geliştiriyoruz";
textContents[4].querySelector("p").textContent = "Her sektörün kendine özgü dinamikleri olduğunu biliyor, bu doğrultuda size özel pazarlama stratejileri geliştiriyoruz. Hedef kitlenizi analiz ediyor, rakip analizi yapıyor ve markanızın dijital dünyada öne çıkması için yaratıcı çözümler sunuyoruz. Uzun vadeli ortaklık anlayışımızla markanızın büyümesine katkı sağlıyoruz.";

const contactSection = document.querySelector(".contact");
const iletisim = contactSection.querySelector("h4");
const paragraflar = contactSection.querySelectorAll("p");

const adres = paragraflar[0];
const telefon =paragraflar[1];
const mail = paragraflar[2];

iletisim.textContent ="İletişim";
adres.textContent ="Maslak Mahallesi Büyükdere Cad. No:255 Sarıyer İstanbul, Türkiye";
telefon.textContent ="+90 (212) 789 45 61";
mail.textContent ="info@dijitalpazarlamaajansı.com";