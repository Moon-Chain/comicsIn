create_comic("c_1");
create_panel("c_1", "200px;", null, "Yıl 1945", null, null);
create_panel("c_1", "400px;", "assets/images/panel/photo1.png", null, "Steve günü kurtarır ama..", null);
create_panel("c_1", "300px;", "assets/images/panel/photo2.png", "gemiyi kurtaramaz", null, null);
create_panel("c_1", "300px;", "assets/images/panel/photo3.png", null, "ve sevenlerinin umutlarını da..", null);
create_panel("c_1", "300px;", "assets/images/panel/photo4.png", "aradan 70 yıl geçer", null, null);
create_panel("c_1", "160px;", "assets/images/panel/photo5.png", null, "buzulda araştırma yapan bir ekip", null);
create_panel("c_1", "160px;", "assets/images/panel/photo6.png", null, "bir gemi bulurlar", null);
create_panel("c_1", "160px;", "assets/images/panel/photo7.png", "ve gemiyi incelemeye başlarlar..", null, null);

create_comic("c_2");
create_panel("c_2", "150px;", "assets/images/panel/photo8.png", null, null, null);
create_panel("c_2", "200px;", "assets/images/panel/photo9.png", "Yıllar sonra ortaya çıkar", null, null);
create_panel("c_2", "220px;", "assets/images/panel/photo10.png", null, null, null);
create_panel("c_2", "220px;", "assets/images/panel/photo11.png", null, null, null);
create_panel("c_2", "140px;", null, null, "Devam edecek..", null);

run_comic("c_1");
run_comic("c_2");