var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://demo:demo@10.99.30.233:27017/demo', { useUnifiedTopology: true }, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/challenge.js',
    'models/user.js',
    'models/book.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Challenge', 'Book', 'User'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
      'model': 'User',
      'documents': [
          { '_id': '602f38052ec4c985c0d32f33', 'userName': 'ZP', 'email': 'jp.paalassalo@gmail.com'},
          { '_id': '602f38052ec4c985c0d32f34', 'userName': 'Ode', 'email': 'outi.veivo@gmail.com'}
      ] 
    },
    {
      'model': 'Book',
      'documents': [
          { 
            'bookName': 'Kaunasin sivut',
            'author': 'Jyrki Erra',
            'rating': 3,
            'comment': 'Tavoittaa mainiosti umbertoecomaisen hidassoutuisuuden.',
            'reader': "602f38052ec4c985c0d32f33",
            'challengeId': "602f392e16cc0486b66c00e2"
          },
          { 
            'bookName': 'Suon villi laulu',
            'author': 'Delia Owens',
            'rating': 3,
            'comment': ' ',
            'reader': "602f38052ec4c985c0d32f34",
            'challengeId': "602f392e16cc0486b66c00ef"
          }

      ] 
    },
    {  
        'model': 'Challenge',
        'documents': [
          {"_id":"602f392e16cc0486b66c00e0","year":2021,"listIndex":1,"descr":"Kirjassa kirjoitetaan päiväkirjaa"},
          {"_id":"602f392e16cc0486b66c00e1","year":2021,"listIndex":2,"descr":"Kirjan on kirjoittanut opettaja"},
          {"_id":"602f392e16cc0486b66c00e2","year":2021,"listIndex":3,"descr":"Historiallinen romaani"},
          {"_id":"602f392e16cc0486b66c00e3","year":2021,"listIndex":4,"descr":"Joku kertoo kirjassa omista muistoistaan"},
          {"_id":"602f392e16cc0486b66c00e4","year":2021,"listIndex":5,"descr":"Kirja liittyy tv-sarjaan tai elokuvaan"},
          {"_id":"602f392e16cc0486b66c00e5","year":2021,"listIndex":6,"descr":"Kirja kertoo rakkaudesta"},
          {"_id":"602f392e16cc0486b66c00e6","year":2021,"listIndex":7,"descr":"Kirjassa on kaveriporukka"},
          {"_id":"602f392e16cc0486b66c00e7","year":2021,"listIndex":8,"descr":"Kirja, jossa maailma on muutoksessa"},
          {"_id":"602f392e16cc0486b66c00e8","year":2021,"listIndex":9,"descr":"Kirjailijan etunimi ja sukunimi alkavat samalla kirjaimella"},
          {"_id":"602f392e16cc0486b66c00e9","year":2021,"listIndex":10,"descr":"Kirjan nimessä on numero"},
          {"_id":"602f392e16cc0486b66c00ea","year":2021,"listIndex":11,"descr":"Kirja kertoo köyhyydestä"},
          {"_id":"602f392e16cc0486b66c00eb","year":2021,"listIndex":12,"descr":"Kirjassa ollaan metsässä"},
          {"_id":"602f392e16cc0486b66c00ec","year":2021,"listIndex":13,"descr":"Kirja liittyy teatteriin, oopperaan tai balettiin"},
          {"_id":"602f392e16cc0486b66c00ed","year":2021,"listIndex":14,"descr":"Kirja on osa kirjasarjaa"},
          {"_id":"602f392e16cc0486b66c00ee","year":2021,"listIndex":15,"descr":"Kirjassa on jotain samaa kuin omassa elämässäsi"},
          {"_id":"602f392e16cc0486b66c00ef","year":2021,"listIndex":16,"descr":"Kirjassa eletään ilman sähköä"},
          {"_id":"602f392e16cc0486b66c00f0","year":2021,"listIndex":17,"descr":"Kirjan nimessä on kirjan päähenkilön nimi"},
          {"_id":"602f392e16cc0486b66c00f1","year":2021,"listIndex":18,"descr":"Kirja kertoo sateenkaariperheestä"},
          {"_id":"602f392e16cc0486b66c00f2","year":2021,"listIndex":19,"descr":"Kirjassa leikitään"},
          {"_id":"602f392e16cc0486b66c00f3","year":2021,"listIndex":20,"descr":"Kirjassa on ammatti, jota ei enää ole tai joka on harvinainen"},
          {"_id":"602f392e16cc0486b66c00f4","year":2021,"listIndex":21,"descr":"Kirja liittyy johonkin vuodenaikaan"},
          {"_id":"602f392e16cc0486b66c00f5","year":2021,"listIndex":22,"descr":"Kirjassa ajetaan polkupyörällä"},
          {"_id":"602f392e16cc0486b66c00f6","year":2021,"listIndex":23,"descr":"Kirja, jota luet ulkona"},
          {"_id":"602f392e16cc0486b66c00f7","year":2021,"listIndex":24,"descr":"Kirjan nimessä on kysymysmerkki tai huutomerkki"},
          {"_id":"602f392e16cc0486b66c00f8","year":2021,"listIndex":25,"descr":"Kirjan on kirjoittanut kaksi kirjailijaa"},
          {"_id":"602f392e16cc0486b66c00f9","year":2021,"listIndex":26,"descr":"Elämäkerta henkilöstä, joka on elossa"},
          {"_id":"602f392e16cc0486b66c00fa","year":2021,"listIndex":27,"descr":"Kirjan päähenkilö on eläin"},
          {"_id":"602f392e16cc0486b66c00fb","year":2021,"listIndex":28,"descr":"Kirja, jonka lukemisesta on sinulle hyötyä"},
          {"_id":"602f392e16cc0486b66c00fc","year":2021,"listIndex":29,"descr":"Kirjan henkilön elämä muuttuu"},
          {"_id":"602f392e16cc0486b66c00fd","year":2021,"listIndex":30,"descr":"Kirja on julkaistu kirjoittajan kuoleman jälkeen"},
          {"_id":"602f392e16cc0486b66c00fe","year":2021,"listIndex":31,"descr":"Jännityskirja tai dekkari "},
          {"_id":"602f392e16cc0486b66c00ff","year":2021,"listIndex":32,"descr":"Kirjan kansikuvassa tai takakannen tekstissä on kissa"},
          {"_id":"602f392e16cc0486b66c0100","year":2021,"listIndex":33,"descr":"Kirjassa opetetaan jokin taito"},
          {"_id":"602f392e16cc0486b66c0101","year":2021,"listIndex":34,"descr":"Kirjassa tarkkaillaan luontoa"},
          {"_id":"602f392e16cc0486b66c0102","year":2021,"listIndex":35,"descr":"Kirja, jonka ilmestymistä olet odottanut"},
          {"_id":"602f392e16cc0486b66c0103","year":2021,"listIndex":36,"descr":"Kirjassa liikutaan ajassa"},
          {"_id":"602f392e16cc0486b66c0104","year":2021,"listIndex":37,"descr":"Kirjan henkilön työ on tärkeä tarinassa"},
          {"_id":"602f392e16cc0486b66c0105","year":2021,"listIndex":38,"descr":"Kirja on käännetty hyvin"},
          {"_id":"602f392e16cc0486b66c0106","year":2021,"listIndex":39,"descr":"Kirjassa kuunnellaan musiikkia"},
          {"_id":"602f392e16cc0486b66c0107","year":2021,"listIndex":40,"descr":"Kirjassa kerrotaan eläinten oikeuksista"},
          {"_id":"602f392e16cc0486b66c0108","year":2021,"listIndex":41,"descr":"Kirjassa matkustetaan junalla"},
          {"_id":"602f392e16cc0486b66c0109","year":2021,"listIndex":42,"descr":"Satukirja"},
          {"_id":"602f392e16cc0486b66c010a","year":2021,"listIndex":43,"descr":"Kirjassa ei kerrota sen päähenkilön nimeä"},
          {"_id":"602f392e16cc0486b66c010b","year":2021,"listIndex":44,"descr":"Kirjassa on reseptejä"},
          {"_id":"602f392e16cc0486b66c010c","year":2021,"listIndex":45,"descr":"Kirjan on kirjoittanut pohjoismainen kirjailija"},
          {"_id":"602f392e16cc0486b66c010d","year":2021,"listIndex":46,"descr":"Kirjassa syödään herkkuja"},
          {"_id":"602f392e16cc0486b66c010e","year":2021,"listIndex":47,"descr":"Kaksi kirjaa, jotka kertovat samasta aiheesta"},
          {"_id":"602f392e16cc0486b66c010f","year":2021,"listIndex":48,"descr":"Kaksi kirjaa, jotka kertovat samasta aiheesta"},
          {"_id":"602f392e16cc0486b66c0110","year":2021,"listIndex":49,"descr":"Kirja on julkaistu vuonna 2021"},
          {"_id":"602f392e16cc0486b66c0111","year":2021,"listIndex":50,"descr":"Kirjaa on suositellut kirjaston työntekijä"}
        ]
    }
];