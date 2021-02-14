var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://demo:demo@10.99.30.233:27017/demo', { useUnifiedTopology: true }, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/task.js',
    'models/user.js',
    'models/book.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Task', 'Book', 'User'], function() {
 
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
          { '_id': '#9847598', 'userName': 'admin', 'passwd': 'demo'},
          { '_id': '#7598237', 'userName': 'ZP', 'passwd': 'demo'},
          { '_id': '#1243218', 'userName': 'Ode', 'passwd': 'demo'}
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
            'reader': "#7598237",
            'taskId': "3"
          }
      ] 
    },
    {  
        'model': 'Task',
        'documents': [
            { 'year': 2021, 'listIndex': 1, 'descr': 'Kirjassa kirjoitetaan päiväkirjaa' },
            { 'year': 2021, 'listIndex': 2, 'descr': 'Kirjan on kirjoittanut opettaja' },
            { 'year': 2021, 'listIndex': 3, 'descr': 'Historiallinen romaani' },
            { 'year': 2021, 'listIndex': 4, 'descr': 'Joku kertoo kirjassa omista muistoistaan' },
            { 'year': 2021, 'listIndex': 5, 'descr': 'Kirja liittyy tv-sarjaan tai elokuvaan' },
            { 'year': 2021, 'listIndex': 6, 'descr': 'Kirja kertoo rakkaudesta' },
            { 'year': 2021, 'listIndex': 7, 'descr': 'Kirjassa on kaveriporukka' },
            { 'year': 2021, 'listIndex': 8, 'descr': 'Kirja, jossa maailma on muutoksessa' },
            { 'year': 2021, 'listIndex': 9, 'descr': 'Kirjailijan etunimi ja sukunimi alkavat samalla kirjaimella' },
            { 'year': 2021, 'listIndex': 10, 'descr': 'Kirjan nimessä on numero' },
            { 'year': 2021, 'listIndex': 11, 'descr': 'Kirja kertoo köyhyydestä' },
            { 'year': 2021, 'listIndex': 12, 'descr': 'Kirjassa ollaan metsässä' },
            { 'year': 2021, 'listIndex': 13, 'descr': 'Kirja liittyy teatteriin, oopperaan tai balettiin' },
            { 'year': 2021, 'listIndex': 14, 'descr': 'Kirja on osa kirjasarjaa' },
            { 'year': 2021, 'listIndex': 15, 'descr': 'Kirjassa on jotain samaa kuin omassa elämässäsi' },
            { 'year': 2021, 'listIndex': 16, 'descr': 'Kirjassa eletään ilman sähköä' },
            { 'year': 2021, 'listIndex': 17, 'descr': 'Kirjan nimessä on kirjan päähenkilön nimi' },
            { 'year': 2021, 'listIndex': 18, 'descr': 'Kirja kertoo sateenkaariperheestä' },
            { 'year': 2021, 'listIndex': 19, 'descr': 'Kirjassa leikitään' },
            { 'year': 2021, 'listIndex': 20, 'descr': 'Kirjassa on ammatti, jota ei enää ole tai joka on harvinainen' },
            { 'year': 2021, 'listIndex': 21, 'descr': 'Kirja liittyy johonkin vuodenaikaan' },
            { 'year': 2021, 'listIndex': 22, 'descr': 'Kirjassa ajetaan polkupyörällä' },
            { 'year': 2021, 'listIndex': 23, 'descr': 'Kirja, jota luet ulkona' },
            { 'year': 2021, 'listIndex': 24, 'descr': 'Kirjan nimessä on kysymysmerkki tai huutomerkki' },
            { 'year': 2021, 'listIndex': 25, 'descr': 'Kirjan on kirjoittanut kaksi kirjailijaa' },
            { 'year': 2021, 'listIndex': 26, 'descr': 'Elämäkerta henkilöstä, joka on elossa' },
            { 'year': 2021, 'listIndex': 27, 'descr': 'Kirjan päähenkilö on eläin' },
            { 'year': 2021, 'listIndex': 28, 'descr': 'Kirja, jonka lukemisesta on sinulle hyötyä' },
            { 'year': 2021, 'listIndex': 29, 'descr': 'Kirjan henkilön elämä muuttuu' },
            { 'year': 2021, 'listIndex': 30, 'descr': 'Kirja on julkaistu kirjoittajan kuoleman jälkeen' },
            { 'year': 2021, 'listIndex': 31, 'descr': 'Jännityskirja tai dekkari ' },
            { 'year': 2021, 'listIndex': 32, 'descr': 'Kirjan kansikuvassa tai takakannen tekstissä on kissa' },
            { 'year': 2021, 'listIndex': 33, 'descr': 'Kirjassa opetetaan jokin taito' },
            { 'year': 2021, 'listIndex': 34, 'descr': 'Kirjassa tarkkaillaan luontoa' },
            { 'year': 2021, 'listIndex': 35, 'descr': 'Kirja, jonka ilmestymistä olet odottanut' },
            { 'year': 2021, 'listIndex': 36, 'descr': 'Kirjassa liikutaan ajassa' },
            { 'year': 2021, 'listIndex': 37, 'descr': 'Kirjan henkilön työ on tärkeä tarinassa' },
            { 'year': 2021, 'listIndex': 38, 'descr': 'Kirja on käännetty hyvin' },
            { 'year': 2021, 'listIndex': 39, 'descr': 'Kirjassa kuunnellaan musiikkia' },
            { 'year': 2021, 'listIndex': 40, 'descr': 'Kirjassa kerrotaan eläinten oikeuksista' },
            { 'year': 2021, 'listIndex': 41, 'descr': 'Kirjassa matkustetaan junalla' },
            { 'year': 2021, 'listIndex': 42, 'descr': 'Satukirja' },
            { 'year': 2021, 'listIndex': 43, 'descr': 'Kirjassa ei kerrota sen päähenkilön nimeä' },
            { 'year': 2021, 'listIndex': 44, 'descr': 'Kirjassa on reseptejä' },
            { 'year': 2021, 'listIndex': 45, 'descr': 'Kirjan on kirjoittanut pohjoismainen kirjailija' },
            { 'year': 2021, 'listIndex': 46, 'descr': 'Kirjassa syödään herkkuja' },
            { 'year': 2021, 'listIndex': 47, 'descr': 'Kaksi kirjaa, jotka kertovat samasta aiheesta' },
            { 'year': 2021, 'listIndex': 48, 'descr': 'Kaksi kirjaa, jotka kertovat samasta aiheesta' },
            { 'year': 2021, 'listIndex': 49, 'descr': 'Kirja on julkaistu vuonna 2021' },
            { 'year': 2021, 'listIndex': 50, 'descr': 'Kirjaa on suositellut kirjaston työntekijä' }
        ]
    }
];