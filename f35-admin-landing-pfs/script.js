

$(document).ready(function() {
    // Efek Show/Hide untuk Sidebar
    $('.menu-icon').click(function() {
        $('.sidebar').toggle('slow'); // Efek hide/show dengan sliding pada sidebar
    });

    
    $(document).ready(function() {
        // Menyembunyikan elemen card dan menempatkannya di bawah tampilan
        $('.card').css({
            position: 'relative',
            bottom: '-100px',  // Mengatur posisi awal elemen di bawah layar
            opacity: 0  // Mulai dengan transparan
        }).animate({
            bottom: '0px',  // Menggerakkan elemen ke posisi semula (atas)
            opacity: 1  // Mengembalikan opacity menjadi 1
        }, 2000);  // Durasi animasi
    });

    $(document).ready(function() {
        // Menyembunyikan elemen card dan menempatkannya di bawah tampilan
        $('.chart, .budget-container').css({
            position: 'relative',
            bottom: '-500px',  // Mengatur posisi awal elemen di bawah layar
            opacity: 0  // Mulai dengan transparan
        }).animate({
            bottom: '0px',  // Menggerakkan elemen ke posisi semula (atas)
            opacity: 1  // Mengembalikan opacity menjadi 1
        }, 3000);  // Durasi animasi
    });


    

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Efek Fade In/Fade Out untuk chart dan budget container
    // $('.chart, .budget-container').hover(
    //     function() {
    //         $(this).fadeTo(300, 0.7);  // Fade out saat hover
    //     },
    //     function() {
    //         $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
    //     }
    // );

    // Efek animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '25px',  // Animasi perubahan ukuran teks
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '20px',  // Kembali ke ukuran asli
        }, 400);
    });

    // Efek Show/Hide pada profil
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500);  // Gambar akan hilang/muncul saat diklik
    });
    
   // Inisialisasi grafik batang (Bar chart)
const ctxBar = document.getElementById('myBarChart').getContext('2d');
const originalData = [12000, 19000, 3000, 5000, 20000, 30000]; // Data asli untuk reset setelah hover
const hoverData = originalData.map(value => value * 1.1); // Data diperbesar 10% saat hover

const myBarChart = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Revenue',
      data: originalData, // Menggunakan data asli
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      onHover: function(event, elements) {
        if (elements.length) {
          const index = elements[0].index;
          // Memperbesar batang saat di-hover dengan data diperbesar
          myBarChart.data.datasets[0].data = [...originalData]; // Reset data
          myBarChart.data.datasets[0].data[index] = hoverData[index]; // Set data yang diperbesar
          myBarChart.update();
        } else {
          // Kembali ke data asli saat tidak di-hover
          myBarChart.data.datasets[0].data = originalData;
          myBarChart.update();
        }
      }
    }
  }
});

// Menambahkan event click untuk memperbesar batang pada grafik
document.getElementById('myBarChart').addEventListener('click', function(evt) {
  const activePoints = myBarChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

  if (activePoints.length) {
    const index = activePoints[0].index;
    // Perbesar batang yang di-klik
    myBarChart.data.datasets[0].data[index] = hoverData[index]; // Set data yang diperbesar
    myBarChart.update();

    setTimeout(() => {
      // Kembalikan batang ke ukuran semula setelah 500ms
      myBarChart.data.datasets[0].data[index] = originalData[index];
      myBarChart.update();
    }, 500);
  }
});



    


    // Pie chart initialization (Chart.js)
const ctx = document.getElementById('myPieChart1').getContext('2d');

const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
    datasets: [{
      label: 'Expenses',
      data: [5000, 2000, 15000, 3000, 5000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ],
      hoverOffset: 20 // Membesar saat di-hover
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    },
    hover: {
      onHover: function(event, elements) {
        if (elements.length) {
          const segmentIndex = elements[0].index;
          // Mengubah skala segmen grafik saat di-hover
          myPieChart.data.datasets[0].hoverOffset = segmentIndex === 2 ? 20 : 0; // Contoh untuk segmen "Salaries" di indeks 2
          myPieChart.update();
        }
      }
    }
  }
});

    
    

const ctxExpenses = document.getElementById('myPieChart2').getContext('2d');

const expensesPieChart = new Chart(ctxExpenses, {
  type: 'pie',
  data: {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [{
      label: 'Expenses Budget',
      data: [3000, 4000, 1500, 2500, 3000],
      backgroundColor: [
        'rgba(255, 159, 64, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)'
      ],
      hoverOffset: 20 // Offset pembesaran saat di-hover
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
      }
    },
    hover: {
      onHover: function(event, elements) {
        if (elements.length) {
          // Jika ada segmen yang di-hover, aktifkan hoverOffset untuk membesar
          expensesPieChart.data.datasets[0].hoverOffset = 20;
          expensesPieChart.update();
        } else {
          // Jika tidak di-hover, kembalikan ke ukuran normal
          expensesPieChart.data.datasets[0].hoverOffset = 10;
          expensesPieChart.update();
        }
      }
    }
  }
});

});
$(document).ready(function() {
    // Event click untuk memperbesar chart atau budget container
    $('.chart, .budget-container, canvas').click(function() {
        // Toggle kelas 'enlarged' untuk elemen yang diklik
        $(this).toggleClass('enlarged');
    });
});
document.querySelector('.hamburger-button').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('expanded');
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('expanded');
    document.querySelector('main').classList.toggle('shifted');
});
document.querySelector('.menu-icon').addEventListener('click', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    // Toggle sidebar visibility
    sidebar.classList.toggle('sidebar-visible');
    sidebar.classList.toggle('sidebar-hidden');

    // Adjust main content based on sidebar visibility
    mainContent.classList.toggle('main-content-expanded');
    mainContent.classList.toggle('main-content-contracted');
});
// Select all chart elements
document.querySelectorAll('.chart, .pie-chart').forEach(chart => {
    chart.addEventListener('click', function() {
      // Toggle the 'enlarged' class on click
      this.classList.toggle('enlarged');
    });
  });
  