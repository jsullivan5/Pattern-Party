// Accordion Tabs
$('.tab').click((event) => {
  const $newActiveTab = event.target
    .closest('.tab');
  const dataTab = $($newActiveTab).data()

  $('.tab').removeClass('tab-active');
  $($newActiveTab).addClass('tab-active');

  $('.section-body').each((index, element) => {
    if ($(element).data().tab === dataTab.tab) {
      $(element).removeClass('hidden');
    } else {
      $(element).addClass('hidden');
    }
  });
});

// Collapsible Nav

$('.nav-logo-wrapper').click(() => {
  const width = $(window).width();
  if (width <= 650) {
    $('.nav-link-wrapper').toggleClass('hidden');
  }
});
