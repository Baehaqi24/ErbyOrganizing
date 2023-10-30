$(document).ready(function() {
    $('#orderForm').submit(function(e) {
      e.preventDefault();
      
      var inputUndangan = $('#input_undangan').val();
      var namePria = $('#name_pria').val();
      var panggilanPria = $('#panggilan_pria').val();
      var ayahPria = $('#ayah_pria').val();
      var ibuPria = $('#ibu_pria').val();
      var anakPria = $('#anak_pria').val();
        // Mempelai Wanita
      var nameWanita = $('#name_wanita').val();
      var panggilanWanita = $('#panggilan_wanita').val();
      var ayahWanita = $('#ayah_wanita').val();
      var ibuWanita = $('#ibu_wanita').val();
      var anakWanita = $('#anak_wanita').val();
        // Data Akad Pernikahan
      var dateAkad = $('#date_akad').val();
      var timeAkad = $('#time_akad').val();
      var nameAkad = $('#name_akad').val();
      var urlAkad = $('#url_akad').val();
        // Data Resepsi Pernikahan
      var dateResepsi = $('#date_resepsi').val();
      var timeResepsi = $('#time_resepsi').val();
      var nameResepsi = $('#name_resepsi').val();
      var urlResepsi = $('#url_resepsi').val();
        // Data Lainnya
      var numberPria = $('#number_pria').val();
      var urlPria = $('#url_pria').val();
      var numberWanita = $('#number_wanita').val();
      var urlWanita = $('#url_wanita').val();
      
      var message = 'ORDER INVITATION:\n';
      message += 'Nama Produk: ' + inputUndangan + '\n';
      message += 'Name: ' + namePria + '\n';
      message += 'Nama Panggilan: ' + panggilanPria + '\n';
      message += 'Ayah Pria: ' + ayahPria + '\n';
      message += 'Ibu Pria: ' + ibuPria + '\n';
      message += 'Anak Ke: ' + anakPria + '\n';
        //   Mempelai Wanita
      message += 'Name: ' + nameWanita + '\n';
      message += 'Nama Panggilan: ' + panggilanWanita + '\n';
      message += 'Ayah Wanita: ' + ayahWanita + '\n';
      message += 'Ibu Wanita: ' + ibuWanita + '\n';
      message += 'Anak Ke: ' + anakWanita + '\n';
        // Data Akad Pernikahan
      message += 'Hari & Tanggal Akad: ' + dateAkad + '\n';
      message += 'Waktu Akad: ' + timeAkad + '\n';
      message += 'Tempat Acara: ' + nameAkad + '\n';
      message += 'Lokasi: ' + urlAkad + '\n';
        // Data Resepsi Pernikahan
      message += 'Hari & Tanggal Resepsi: ' + dateResepsi + '\n';
      message += 'Waktu Resepsi: ' + timeResepsi + '\n';
      message += 'Tempat Acara: ' + nameResepsi + '\n';
      message += 'Lokasi: ' + urlResepsi + '\n';
        // Data Lainnya
      message += 'Wa Pria: ' + numberPria + '\n';
      message += 'Ig Pria: ' + urlPria + '\n';
      message += 'Wa Wanita: ' + numberWanita + '\n';
      message += 'Ig Wanita: ' + urlWanita + '\n';
      
      var url = 'https://api.whatsapp.com/send?phone=6285695620052&text=' + encodeURIComponent(message);
      // Ganti "YOUR_PHONE_NUMBER" dengan nomor WhatsApp Anda
      
      window.location.href = url;
    });
  });