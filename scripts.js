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
  })
})
