CREATE DATABaSE ecomerce ; 
USE ecomerce ; 
CREATE TABLE data(id int AUTO_INCREMENT , 
    pic varchar(1000) , 
    name varchar(100) ,
    descr LONGTEXT , 
    price int ,
    PRIMARY KEY(id)
    )

   /*************   Data To Insert   ******** */    
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/f/5/f571gt-hn962t.jpg","ASUS F571","Écran 15.6 FULL HD IPS, 144Hz - Processeur: Intel Core i5-9300H ( 2,40 GHz up to 4.10 GHz Turbo max, 8 Mo de mémoire cache, Quad-Core) - Système d exploitation: Windows 10 Famille - Mémoire RAM: 16 Go - Disque Dur:512 Go SSD - Carte Graphique: NVIDIA® GeForce® GTX 1650 (4 Go de mémoire dédiée GDDR6) avec WiFi, Bluetooth,1xUSB 3.2 Gen 1, 1xUSB-C 3.2 Gen 1, 2 x USB 2.0, 1xPrise combo casque/microphone et lecteur de carte 2-en-1 SD/MMC - Couleur: Noir étoile - Garantie: 1 an",2499);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/5/5/5510g15-i5.jpg","DELL G15 5510","Écran 15.6 FULL HD,120HZ - Processeur: Intel Core i5-10500H (2.50 GHz up to 4.50 GHz, 12 Mo de mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 8Go - Disque Dur: 512 Go SSD - Carte Graphique: NVIDIA GeForce GTX1650 (4Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth,1 X USB 2.0,1 X USB 2.0 port with PowerShare, 1 X USB 3.2 Gen 1 ,1x HDMI ,1x RJ45 - Garantie: 1 an ", 2649);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/4/q/4q1s0ea.jpg","HP VICTUS 16","Écran 16.1 Full HD - Processeur: Intel Core i7-11800H (2,30 GHz up to 4,60 GHz Turbo max, 24 Mo de mémoire cache, Octa-Core) - Système d exploitation: Windows 10 Famille - Mémoire: 16 Go DDR4-3200 MHz - Disque dur: 1To SSD - Carte graphique: NVIDIA GeForce RTX 3060 (6 Go de mémoire dédiée GDDR6), avec Wi-Fi, Bluetooth, 1xUSB Type-C, 3xUSB Type-A, 1xHDMI 2.1, 1xRJ-45, 1xprise secteur Smart Pin, 1xprise combinée casque/microphone - Couleur: Noir - Garantie: 1 an",4359);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/g/f/gf63thin11sc-613xfr_1.jpg","MSI GF63","Écran 15.6 FULL HD IPS, 144 Hz - Processeur: Intel Core i5-11400H (2.70 GHz up to 4.50 GHz Turbo max, 12 Mo de mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 8 Go - Disque dur: 512 Go SSD - Carte graphique: NVIDIA GeForce GTX 1650 (4 Go de mémoire dédiée GDDR6) avec Wi-Fi, Bluetooth, 1 x Type-C USB 3.2 Gen 1, 3 x Type-A USB 3.2 Gen 1, 1 x RJ45, 1 x HDMI, 1 x Entrée micro, 1 x Sortie casque - Clavier Rétroéclairage Rouge - Couleur: Noir - Garantie: 2 ans",2799);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/g/o/godzilla-i3-1050ti.jpg","GODZILLA","Processeur: Intel Core I3-10105F (3.70 GHz up to 4.40 GHz Turbo max, 6 Mo Mémoire cache, Quad-Core) - Système d exploitation: FreeDos - Mémoire RAM: 8 Go DDR4 3200MHZ - Disque Dur: 500Go SSD - Carte mère: H510M-K - Carte graphique: Nvidia GeForce GTX 1050 TI (4 Go de Mémoire Dédiée) - BOITIER FSP LINER CMT151 - Alimentation: 550W BRONZE 51AAC- Garantie: 1 an ",1899);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/v/e/vento-i5-1050ti.jpg","VENTO","Processeur: Intel Core i5-10400F (2,90 GHz up to 4,30 GHz Turbo max, 12 Mo Mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 8 Go DDR4 3200Mhz - Disque Dur: 256Go SSD - Carte mère: H510M-R-SI - Carte graphique: Nvidia GeForce GTX 1050TI (4 Go de Mémoire Dédiée) - BOITIER FSP LINER CMT151 - Alimentation: 550W BRONZE 51AAC - Couleur: Noir - Garantie: 1 an ",1939);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/9/0/90rw005kfe_3_1.jpg","IDEACENTRE","Processeur: AMD Ryzen 5 5600G (3,9 GHz up to 4.4 GHz Turbo max, L2: 3Mo/ L3: 16Mo Mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 16Go DDR4  - Disque Dur: 512 Go SSD - Carte graphique: Nvidia GeForce GTX 1650 SUPER (4 Go de Mémoire Dédiée GDDR6) avec Wi-Fi, Bluetooth ,1x USB 3.2 Gen 1, 1x USB 3.2 Gen 2, 1x USB-C 3.2 Gen 1, 4x USB 2.0, 1x VGA, 1x HDMI 1.4, 1x RJ-45, 1x prise combo casque/micro (3,5 mm), 1x sortie audio (3,5 mm) - Couleur :Noir - Garantie: 2 ans",2249);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/v/e/vento-i5-2060.jpg","VENTO-I5","Processeur: Intel Core i5-10400F (2,90 GHz up to 4,30 GHz Turbo max, 12 Mo Mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 16 Go DDR4 3200Mhz - Disque Dur: 256Go SSD - Carte mère: H510M-R-SI - Carte graphique: Nvidia GeForce RTX 2060 (6 Go de Mémoire Dédiée) - BOITIER FSP LINER CMT151 - Alimentation: 550W BRONZE 51AAC - Couleur: Noir - Garantie: 1 an", 3912);
INSERT INTO data (pic , name , descr , price ) VALUES ("https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/v/a/valheim-i5-1660.jpg","VALHEIM I5","Processeur: Intel Core i5-11400F (2.60GHz up to 4.40GHz, 12 Mo Mémoire cache, Hexa-Core) - Système d exploitation: FreeDos - Mémoire RAM: 8 Go DDR4 3200MHZ - Disque Dur: 240 Go SSD SATA 3 2.5 - Carte mère: B560M PRO-VDH - Carte graphique: Nvidia GeForce GTX 1660 (6Go de Mémoire Dédiée GDDR6) - Boitier MSI MAG FORGE 100R RGB - Alimentation NJOY TITAN+ 600W 80+ BRONZE - Garantie: 1 an",2949) ; 
