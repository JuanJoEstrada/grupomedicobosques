YUI().use('calendar', 'datatype-date', 'cssbutton', function (Y) {
  // Create a new instance of calendar, placing it in
  // #mycalendar container, setting its width to 340px,
  // the flags for showing previous and next month's
  // dates in available empty cells to true, and setting
  // the date to today's date.
  const calendar = new Y.Calendar({
    contentBox: '#mycalendar',
    width: '285px',
    showPrevMonth: true,
    showNextMonth: true,
    date: new Date(),
  }).render();

  // Get a reference to Y.DataType.Date
  const dtdate = Y.DataType.Date;

  // Listen to calendar's selectionChange event.
  calendar.on('selectionChange', function (ev) {
    // Get the date from the list of selected
    // dates returned with the event (since only
    // single selection is enabled by default,
    // we expect there to be only one date)
    const newDate = ev.newSelection[0];

    // Format the date and output it to a DOM
    // element.
    Y.one('#selecteddate').setHTML(dtdate.format(newDate));
    const fumString = document.getElementById('selecteddate').textContent;

    const dateFum = new Date(`${fumString}T00:00:00`);
    dateFum.setDate(dateFum.getDate() + 281);
    const yearFpp = dateFum.getFullYear();
    const monthFpp = dateFum.getMonth();
    const dayFpp = dateFum.getDay();
    const dateFpp = dateFum.getDate();
    const month = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    const day = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    const fpp = `${day[dayFpp]} ${dateFpp} de ${month[monthFpp]} del ${yearFpp}`;
    document.getElementById('fpp').textContent = fpp;
  });
});
