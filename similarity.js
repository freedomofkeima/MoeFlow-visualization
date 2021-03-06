var nodes = null;
var edges = null;
var network = null;

// Called when the Visualization API is loaded.
function draw() {
  var DIR = 'img/';
  nodes = [
    {id:'akemi_homura', shape: 'circularImage', image: DIR + 'akemi_homura.jpg', label: "Akemi Homura"},
    {id:'akiyama_mio', shape: 'circularImage', image: DIR + 'akiyama_mio.jpg', label: "Akiyama Mio"},
    {id:'alice_cartelet', shape: 'circularImage', image: DIR + 'alice_cartelet.jpg', label: "Alice Cartelet"},
    {id:'aqua', shape: 'circularImage', image: DIR + 'aqua.jpg', label: "Aqua"},
    {id:'aragaki_ayase', shape: 'circularImage', image: DIR + 'aragaki_ayase.jpg', label: "Aragaki Ayase"},
    {id:'asahina_mikuru', shape: 'circularImage', image: DIR + 'asahina_mikuru.jpg', label: "Asahina Mikuru"},
    {id:'asuna', shape: 'circularImage', image: DIR + 'asuna.jpg', label: "Asuna"},
    {id:'ayanami_rei', shape: 'circularImage', image: DIR + 'ayanami_rei.jpg', label: "Ayanami Rei"},
    {id:'ayase_eli', shape: 'circularImage', image: DIR + 'ayase_eli.jpg', label: "Ayase Eli"},
    {id:'dekomori_sanae', shape: 'circularImage', image: DIR + 'dekomori_sanae.jpg', label: "Dekomori Sanae"},
    {id:'dustiness_ford_lalatina', shape: 'circularImage', image: DIR + 'dustiness_ford_lalatina.jpg', label: "Dustiness Ford Lalatina"},
    {id:'emilia', shape: 'circularImage', image: DIR + 'emilia.jpg', label: "Emilia"},
    {id:'gokou_ruri', shape: 'circularImage', image: DIR + 'gokou_ruri.jpg', label: "Gokou Ruri"},
    {id:'hibiki', shape: 'circularImage', image: DIR + 'hibiki.jpg', label: "Hibiki"},
    {id:'hirasawa_yui', shape: 'circularImage', image: DIR + 'hirasawa_yui.jpg', label: "Hirasawa Yui"},
    {id:'hoshizora_rin', shape: 'circularImage', image: DIR + 'hoshizora_rin.jpg', label: "Hoshizora Rin"},
    {id:'hoto_cocoa', shape: 'circularImage', image: DIR + 'hoto_cocoa.jpg', label: "Hoto Cocoa"},
    {id:'hyoudou_michiru', shape: 'circularImage', image: DIR + 'hyoudou_michiru.jpg', label: "Hyoudou Michiru"},
    {id:'illyasviel_von_einzbern', shape: 'circularImage', image: DIR + 'illyasviel_von_einzbern.jpg', label: "Illyasviel Von Einzbern"},
    {id:'inokuma_youko', shape: 'circularImage', image: DIR + 'inokuma_youko.jpg', label: "Inokuma Youko"},
    {id:'itsuka_kotori', shape: 'circularImage', image: DIR + 'itsuka_kotori.jpg', label: "Itsuka Kotori"},
    {id:'izumi_sagiri', shape: 'circularImage', image: DIR + 'izumi_sagiri.jpg', label: "Izumi Sagiri"},
    {id:'jouga_maya', shape: 'circularImage', image: DIR + 'jouga_maya.jpg', label: "Jouga Maya"},
    {id:'kafuu_chino', shape: 'circularImage', image: DIR + 'kafuu_chino.jpg', label: "Kafuu Chino"},
    {id:'kaname_madoka', shape: 'circularImage', image: DIR + 'kaname_madoka.jpg', label: "Kaname Madoka"},
    {id:'kashima', shape: 'circularImage', image: DIR + 'kashima.jpg', label: "Kashima"},
    {id:'kasumigaoka_utaha', shape: 'circularImage', image: DIR + 'kasumigaoka_utaha.jpg', label: "Kasumigaoka Utaha"},
    {id:'katou_megumi', shape: 'circularImage', image: DIR + 'katou_megumi.jpg', label: "Katou Megumi"},
    {id:'kirigaya_suguha', shape: 'circularImage', image: DIR + 'kirigaya_suguha.jpg', label: "Kirigaya Suguha"},
    {id:'kirima_sharo', shape: 'circularImage', image: DIR + 'kirima_sharo.jpg', label: "Kirima Sharo"},
    {id:'kirisaki_chitoge', shape: 'circularImage', image: DIR + 'kirisaki_chitoge.jpg', label: "Kirisaki Chitoge"},
    {id:'koizumi_hanayo', shape: 'circularImage', image: DIR + 'koizumi_hanayo.jpg', label: "Koizumi Hanayo"},
    {id:'komichi_aya', shape: 'circularImage', image: DIR + 'komichi_aya.jpg', label: "Komichi Aya"},
    {id:'kongou', shape: 'circularImage', image: DIR + 'kongou.jpg', label: "Kongou"},
    {id:'kotobuki_tsumugi', shape: 'circularImage', image: DIR + 'kotobuki_tsumugi.jpg', label: "Kotobuki Tsumugi"},
    {id:'kousaka_honoka', shape: 'circularImage', image: DIR + 'kousaka_honoka.jpg', label: "Kousaka Honoka"},
    {id:'kousaka_kirino', shape: 'circularImage', image: DIR + 'kousaka_kirino.jpg', label: "Kousaka Kirino"},
    {id:'kujou_karen', shape: 'circularImage', image: DIR + 'kujou_karen.jpg', label: "Kujou Karen"},
    {id:'kunikida_hanamaru', shape: 'circularImage', image: DIR + 'kunikida_hanamaru.jpg', label: "Kunikida Hanamaru"},
    {id:'kurosawa_dia', shape: 'circularImage', image: DIR + 'kurosawa_dia.jpg', label: "Kurosawa Dia"},
    {id:'kurosawa_ruby', shape: 'circularImage', image: DIR + 'kurosawa_ruby.jpg', label: "Kurosawa Ruby"},
    {id:'leafa', shape: 'circularImage', image: DIR + 'leafa.jpg', label: "Leafa"},
    {id:'lisbeth', shape: 'circularImage', image: DIR + 'lisbeth.jpg', label: "Lisbeth"},
    {id:'makise_kurisu', shape: 'circularImage', image: DIR + 'makise_kurisu.jpg', label: "Makise Kurisu"},
    {id:'matou_sakura', shape: 'circularImage', image: DIR + 'matou_sakura.jpg', label: "Matou Sakura"},
    {id:'matsuura_kanan', shape: 'circularImage', image: DIR + 'matsuura_kanan.jpg', label: "Matsuura Kanan"},
    {id:'megumin', shape: 'circularImage', image: DIR + 'megumin.jpg', label: "Megumin"},
    {id:'miki_sayaka', shape: 'circularImage', image: DIR + 'miki_sayaka.jpg', label: "Miki Sayaka"},
    {id:'minami_kotori', shape: 'circularImage', image: DIR + 'minami_kotori.jpg', label: "Minami Kotori"},
    {id:'misaka_mikoto', shape: 'circularImage', image: DIR + 'misaka_mikoto.jpg', label: "Misaka Mikoto"},
    {id:'miyu_edelfelt', shape: 'circularImage', image: DIR + 'miyu_edelfelt.jpg', label: "Miyu Edelfelt"},
    {id:'nagato_yuki', shape: 'circularImage', image: DIR + 'nagato_yuki.jpg', label: "Nagato Yuki"},
    {id:'nakano_azusa', shape: 'circularImage', image: DIR + 'nakano_azusa.jpg', label: "Nakano Azusa"},
    {id:'natsu_megumi', shape: 'circularImage', image: DIR + 'natsu_megumi.jpg', label: "Natsu Megumi"},
    {id:'nibutani_shinka', shape: 'circularImage', image: DIR + 'nibutani_shinka.jpg', label: "Nibutani Shinka"},
    {id:'nishikino_maki', shape: 'circularImage', image: DIR + 'nishikino_maki.jpg', label: "Nishikino Maki"},
    {id:'ohara_mari', shape: 'circularImage', image: DIR + 'ohara_mari.jpg', label: "Ohara Mari"},
    {id:'onodera_kosaki', shape: 'circularImage', image: DIR + 'onodera_kosaki.jpg', label: "Onodera Kosaki"},
    {id:'oomiya_shinobu', shape: 'circularImage', image: DIR + 'oomiya_shinobu.jpg', label: "Oomiya Shinobu"},
    {id:'ram', shape: 'circularImage', image: DIR + 'ram.jpg', label: "Ram"},
    {id:'rem', shape: 'circularImage', image: DIR + 'rem.jpg', label: "Rem"},
    {id:'saber', shape: 'circularImage', image: DIR + 'saber.jpg', label: "Saber"},
    {id:'sakura_kyouko', shape: 'circularImage', image: DIR + 'sakura_kyouko.jpg', label: "Sakura Kyouko"},
    {id:'sakura_nene', shape: 'circularImage', image: DIR + 'sakura_nene.jpg', label: "Sakura Nene"},
    {id:'sakurauchi_riko', shape: 'circularImage', image: DIR + 'sakurauchi_riko.jpg', label: "Sakurauchi Riko"},
    {id:'saten_ruiko', shape: 'circularImage', image: DIR + 'saten_ruiko.jpg', label: "Saten Ruiko"},
    {id:'sawamura_spencer_eriri', shape: 'circularImage', image: DIR + 'sawamura_spencer_eriri.jpg', label: "Sawamura Spencer Eriri"},
    {id:'shigure', shape: 'circularImage', image: DIR + 'shigure.jpg', label: "Shigure"},
    {id:'shiina_mayuri', shape: 'circularImage', image: DIR + 'shiina_mayuri.jpg', label: "Shiina Mayuri"},
    {id:'shirai_kuroko', shape: 'circularImage', image: DIR + 'shirai_kuroko.jpg', label: "Shirai Kuroko"},
    {id:'silica', shape: 'circularImage', image: DIR + 'silica.jpg', label: "Silica"},
    {id:'sinon', shape: 'circularImage', image: DIR + 'sinon.jpg', label: "Sinon"},
    {id:'sonoda_umi', shape: 'circularImage', image: DIR + 'sonoda_umi.jpg', label: "Sonoda Umi"},
    {id:'souryuu_asuka_langley', shape: 'circularImage', image: DIR + 'souryuu_asuka_langley.jpg', label: "Souryuu Asuka Langley"},
    {id:'suzukaze_aoba', shape: 'circularImage', image: DIR + 'suzukaze_aoba.jpg', label: "Suzukaze Aoba"},
    {id:'suzumiya_haruhi', shape: 'circularImage', image: DIR + 'suzumiya_haruhi.jpg', label: "Suzumiya Haruhi"},
    {id:'tachibana_kanade', shape: 'circularImage', image: DIR + 'tachibana_kanade.jpg', label: "Tachibana Kanade"},
    {id:'tainaka_ritsu', shape: 'circularImage', image: DIR + 'tainaka_ritsu.jpg', label: "Tainaka Ritsu"},
    {id:'takami_chika', shape: 'circularImage', image: DIR + 'takami_chika.jpg', label: "Takami Chika"},
    {id:'takanashi_rikka', shape: 'circularImage', image: DIR + 'takanashi_rikka.jpg', label: "Takanashi Rikka"},
    {id:'takimoto_hifumi', shape: 'circularImage', image: DIR + 'takimoto_hifumi.jpg', label: "Takimoto Hifumi"},
    {id:'tedeza_rize', shape: 'circularImage', image: DIR + 'tedeza_rize.jpg', label: "Tedeza Rize"},
    {id:'tobiichi_origami', shape: 'circularImage', image: DIR + 'tobiichi_origami.jpg', label: "Tobiichi Origami"},
    {id:'tohsaka_rin', shape: 'circularImage', image: DIR + 'tohsaka_rin.jpg', label: "Tohsaka Rin"},
    {id:'tokisaki_kurumi', shape: 'circularImage', image: DIR + 'tokisaki_kurumi.jpg', label: "Tokisaki Kurumi"},
    {id:'tomoe_mami', shape: 'circularImage', image: DIR + 'tomoe_mami.jpg', label: "Tomoe Mami"},
    {id:'tomori_nao', shape: 'circularImage', image: DIR + 'tomori_nao.jpg', label: "Tomori Nao"},
    {id:'toujou_nozomi', shape: 'circularImage', image: DIR + 'toujou_nozomi.jpg', label: "Toujou Nozomi"},
    {id:'tsushima_yoshiko', shape: 'circularImage', image: DIR + 'tsushima_yoshiko.jpg', label: "Tsushima Yoshiko"},
    {id:'uiharu_kazari', shape: 'circularImage', image: DIR + 'uiharu_kazari.jpg', label: "Uiharu Kazari"},
    {id:'ujimatsu_chiya', shape: 'circularImage', image: DIR + 'ujimatsu_chiya.jpg', label: "Ujimatsu Chiya"},
    {id:'watanabe_you', shape: 'circularImage', image: DIR + 'watanabe_you.jpg', label: "Watanabe You"},
    {id:'yagami_kou', shape: 'circularImage', image: DIR + 'yagami_kou.jpg', label: "Yagami Kou"},
    {id:'yamada_elf', shape: 'circularImage', image: DIR + 'yamada_elf.jpg', label: "Yamada Elf"},
    {id:'yatogami_tohka', shape: 'circularImage', image: DIR + 'yatogami_tohka.jpg', label: "Yatogami Tohka"},
    {id:'yazawa_nico', shape: 'circularImage', image: DIR + 'yazawa_nico.jpg', label: "Yazawa Nico"},
    {id:'yoshino', shape: 'circularImage', image: DIR + 'yoshino.jpg', label: "Yoshino"},
    {id:'yui', shape: 'circularImage', image: DIR + 'yui.jpg', label: "Yui"},
    {id:'yuigahama_yui', shape: 'circularImage', image: DIR + 'yuigahama_yui.jpg', label: "Yuigahama Yui"},
    {id:'yukinoshita_yukino', shape: 'circularImage', image: DIR + 'yukinoshita_yukino.jpg', label: "Yukinoshita Yukino"},
  ];

  edges = [
    {from:'sawamura_spencer_eriri', to: 'saber'},
    {from:'sawamura_spencer_eriri', to: 'tomori_nao'},
    {from:'sawamura_spencer_eriri', to: 'yagami_kou'},
    {from:'sawamura_spencer_eriri', to: 'kotobuki_tsumugi'},
    {from:'sawamura_spencer_eriri', to: 'kirisaki_chitoge'},
    {from:'sawamura_spencer_eriri', to: 'kirima_sharo'},
    {from:'sawamura_spencer_eriri', to: 'hoto_cocoa'},
    {from:'sawamura_spencer_eriri', to: 'dustiness_ford_lalatina'},
    {from:'sawamura_spencer_eriri', to: 'kujou_karen'},
    {from:'kasumigaoka_utaha', to: 'tokisaki_kurumi'},
    {from:'kasumigaoka_utaha', to: 'tsushima_yoshiko'},
    {from:'kasumigaoka_utaha', to: 'akemi_homura'},
    {from:'kasumigaoka_utaha', to: 'megumin'},
    {from:'kasumigaoka_utaha', to: 'yazawa_nico'},
    {from:'kasumigaoka_utaha', to: 'hyoudou_michiru'},
    {from:'kasumigaoka_utaha', to: 'katou_megumi'},
    {from:'kasumigaoka_utaha', to: 'yukinoshita_yukino'},
    {from:'kasumigaoka_utaha', to: 'nakano_azusa'},
    {from:'kasumigaoka_utaha', to: 'tohsaka_rin'},
    {from:'yazawa_nico', to: 'tsushima_yoshiko'},
    {from:'yazawa_nico', to: 'nakano_azusa'},
    {from:'yazawa_nico', to: 'megumin'},
    {from:'yazawa_nico', to: 'kurosawa_dia'},
    {from:'sonoda_umi', to: 'jouga_maya'},
    {from:'sonoda_umi', to: 'takanashi_rikka'},
    {from:'sonoda_umi', to: 'tsushima_yoshiko'},
    {from:'sonoda_umi', to: 'toujou_nozomi'},
    {from:'sonoda_umi', to: 'hyoudou_michiru'},
    {from:'kirisaki_chitoge', to: 'ayase_eli'},
    {from:'kirisaki_chitoge', to: 'dustiness_ford_lalatina'},
    {from:'kirisaki_chitoge', to: 'kousaka_kirino'},
    {from:'kirisaki_chitoge', to: 'saber'},
    {from:'kirisaki_chitoge', to: 'yagami_kou'},
    {from:'kirisaki_chitoge', to: 'kousaka_honoka'},
    {from:'kirisaki_chitoge', to: 'yamada_elf'},
    {from:'hibiki', to: 'kashima'},
    {from:'hibiki', to: 'izumi_sagiri'},
    {from:'hibiki', to: 'tobiichi_origami'},
    {from:'hibiki', to: 'kafuu_chino'},
    {from:'hibiki', to: 'aqua'},
    {from:'hibiki', to: 'tomori_nao'},
    {from:'hibiki', to: 'dustiness_ford_lalatina'},
    {from:'sakurauchi_riko', to: 'kunikida_hanamaru'},
    {from:'hoto_cocoa', to: 'alice_cartelet'},
    {from:'hoto_cocoa', to: 'kirima_sharo'},
    {from:'hoto_cocoa', to: 'kujou_karen'},
    {from:'hoto_cocoa', to: 'tomori_nao'},
    {from:'ayanami_rei', to: 'miki_sayaka'},
    {from:'ayanami_rei', to: 'takanashi_rikka'},
    {from:'megumin', to: 'suzumiya_haruhi'},
    {from:'megumin', to: 'miyu_edelfelt'},
    {from:'megumin', to: 'tokisaki_kurumi'},
    {from:'suzukaze_aoba', to: 'rem'},
    {from:'suzukaze_aoba', to: 'kafuu_chino'},
    {from:'tsushima_yoshiko', to: 'gokou_ruri'},
    {from:'tsushima_yoshiko', to: 'matou_sakura'},
    {from:'tomori_nao', to: 'kashima'},
    {from:'akiyama_mio', to: 'nakano_azusa'},
    {from:'akiyama_mio', to: 'saten_ruiko'},
    {from:'akiyama_mio', to: 'yui'},
    {from:'kongou', to: 'makise_kurisu'},
    {from:'kongou', to: 'kunikida_hanamaru'},
    {from:'aragaki_ayase', to: 'yui'},
    {from:'aragaki_ayase', to: 'yukinoshita_yukino'},
    {from:'aragaki_ayase', to: 'gokou_ruri'},
    {from:'aragaki_ayase', to: 'matsuura_kanan'},
    {from:'aragaki_ayase', to: 'saten_ruiko'},
    {from:'aragaki_ayase', to: 'hyoudou_michiru'},
    {from:'misaka_mikoto', to: 'yuigahama_yui'},
    {from:'misaka_mikoto', to: 'shirai_kuroko'},
    {from:'ohara_mari', to: 'kunikida_hanamaru'},
    {from:'ohara_mari', to: 'ayase_eli'},
    {from:'tainaka_ritsu', to: 'hirasawa_yui'},
    {from:'tainaka_ritsu', to: 'kotobuki_tsumugi'},
    {from:'yagami_kou', to: 'sakura_nene'},
    {from:'yamada_elf', to: 'ayase_eli'},
    {from:'yamada_elf', to: 'kujou_karen'},
    {from:'itsuka_kotori', to: 'sakura_kyouko'},
    {from:'itsuka_kotori', to: 'yuigahama_yui'},
    {from:'akemi_homura', to: 'tokisaki_kurumi'},
    {from:'akemi_homura', to: 'miyu_edelfelt'},
    {from:'akemi_homura', to: 'kurosawa_dia'},
    {from:'akemi_homura', to: 'gokou_ruri'},
    {from:'tobiichi_origami', to: 'kafuu_chino'},
    {from:'tomoe_mami', to: 'ayase_eli'},
    {from:'tomoe_mami', to: 'koizumi_hanayo'},
    {from:'tomoe_mami', to: 'asuna'},
    {from:'saber', to: 'dustiness_ford_lalatina'},
    {from:'saber', to: 'kunikida_hanamaru'},
    {from:'saber', to: 'kirima_sharo'},
    {from:'tokisaki_kurumi', to: 'katou_megumi'},
    {from:'suzumiya_haruhi', to: 'nakano_azusa'},
    {from:'ayase_eli', to: 'koizumi_hanayo'},
    {from:'ayase_eli', to: 'kousaka_honoka'},
    {from:'ayase_eli', to: 'kirima_sharo'},
    {from:'dekomori_sanae', to: 'watanabe_you'},
    {from:'dekomori_sanae', to: 'souryuu_asuka_langley'},
    {from:'dekomori_sanae', to: 'sakura_nene'},
    {from:'tedeza_rize', to: 'hyoudou_michiru'},
    {from:'tedeza_rize', to: 'yatogami_tohka'},
    {from:'nibutani_shinka', to: 'hirasawa_yui'},
    {from:'nibutani_shinka', to: 'inokuma_youko'},
    {from:'asahina_mikuru', to: 'inokuma_youko'},
    {from:'asahina_mikuru', to: 'yuigahama_yui'},
    {from:'kurosawa_ruby', to: 'toujou_nozomi'},
    {from:'kurosawa_ruby', to: 'nishikino_maki'},
    {from:'kurosawa_ruby', to: 'matou_sakura'},
    {from:'kirima_sharo', to: 'alice_cartelet'},
    {from:'kirima_sharo', to: 'kafuu_chino'},
    {from:'kirima_sharo', to: 'sakura_nene'},
    {from:'makise_kurisu', to: 'souryuu_asuka_langley'},
    {from:'natsu_megumi', to: 'inokuma_youko'},
    {from:'natsu_megumi', to: 'kaname_madoka'},
    {from:'natsu_megumi', to: 'nishikino_maki'},
    {from:'natsu_megumi', to: 'lisbeth'},
    {from:'sinon', to: 'miki_sayaka'},
    {from:'sinon', to: 'yoshino'},
    {from:'sinon', to: 'aqua'},
    {from:'kousaka_honoka', to: 'koizumi_hanayo'},
    {from:'kousaka_honoka', to: 'hoshizora_rin'},
    {from:'kousaka_honoka', to: 'souryuu_asuka_langley'},
    {from:'shirai_kuroko', to: 'yuigahama_yui'},
    {from:'shirai_kuroko', to: 'inokuma_youko'},
    {from:'shirai_kuroko', to: 'sakura_kyouko'},
    {from:'miyu_edelfelt', to: 'jouga_maya'},
    {from:'silica', to: 'illyasviel_von_einzbern'},
    {from:'sakura_kyouko', to: 'takanashi_rikka'},
    {from:'sakura_kyouko', to: 'nishikino_maki'},
    {from:'sakura_kyouko', to: 'ram'},
    {from:'sakura_kyouko', to: 'yuigahama_yui'},
    {from:'kotobuki_tsumugi', to: 'hirasawa_yui'},
    {from:'tohsaka_rin', to: 'shigure'},
    {from:'tohsaka_rin', to: 'kurosawa_dia'},
    {from:'saten_ruiko', to: 'uiharu_kazari'},
    {from:'saten_ruiko', to: 'nakano_azusa'},
    {from:'saten_ruiko', to: 'shiina_mayuri'},
    {from:'minami_kotori', to: 'kunikida_hanamaru'},
    {from:'watanabe_you', to: 'koizumi_hanayo'},
    {from:'kaname_madoka', to: 'ram'},
    {from:'kaname_madoka', to: 'emilia'},
    {from:'kaname_madoka', to: 'miki_sayaka'},
    {from:'kaname_madoka', to: 'lisbeth'},
    {from:'kaname_madoka', to: 'illyasviel_von_einzbern'},
    {from:'kashima', to: 'izumi_sagiri'},
    {from:'kashima', to: 'illyasviel_von_einzbern'},
    {from:'illyasviel_von_einzbern', to: 'emilia'},
    {from:'toujou_nozomi', to: 'matsuura_kanan'},
    {from:'kirigaya_suguha', to: 'uiharu_kazari'},
    {from:'kirigaya_suguha', to: 'yui'},
    {from:'kafuu_chino', to: 'izumi_sagiri'},
    {from:'kafuu_chino', to: 'miki_sayaka'},
    {from:'kafuu_chino', to: 'aqua'},
    {from:'jouga_maya', to: 'nagato_yuki'},
    {from:'jouga_maya', to: 'takanashi_rikka'},
    {from:'aqua', to: 'miki_sayaka'},
    {from:'aqua', to: 'yoshino'},
    {from:'aqua', to: 'rem'},
    {from:'matou_sakura', to: 'rem'},
    {from:'asuna', to: 'kunikida_hanamaru'},
    {from:'komichi_aya', to: 'miki_sayaka'},
    {from:'komichi_aya', to: 'rem'},
    {from:'komichi_aya', to: 'nakano_azusa'},
    {from:'komichi_aya', to: 'hyoudou_michiru'},
    {from:'yatogami_tohka', to: 'takanashi_rikka'},
    {from:'yatogami_tohka', to: 'hyoudou_michiru'},
    {from:'yatogami_tohka', to: 'matsuura_kanan'},
    {from:'izumi_sagiri', to: 'emilia'},
    {from:'rem', to: 'miki_sayaka'},
    {from:'rem', to: 'ram'},
    {from:'rem', to: 'yoshino'},
    {from:'takanashi_rikka', to: 'hyoudou_michiru'},
    {from:'inokuma_youko', to: 'hirasawa_yui'},
    {from:'ram', to: 'emilia'},
    {from:'koizumi_hanayo', to: 'kunikida_hanamaru'},
    {from:'miki_sayaka', to: 'hyoudou_michiru'},
    {from:'miki_sayaka', to: 'yoshino'},
  ];

  var container = document.getElementById('mynetwork');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    nodes: {
      borderWidth:4,
      size:30,
      color: {
        border: '#222222',
        background: '#666666'
      },
      font:{color:'#eeeeee'}
    },
    edges: {
      color: 'lightgray'
    }
  };
  network = new vis.Network(container, data, options);
}
