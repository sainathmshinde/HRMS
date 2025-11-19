function printDiv() {
  const printArea = document.getElementById('printArea');
  if (!printArea) {
    alert('Print area not found. Wrap printable content inside <div id="printArea"> ... </div>');
    return;
  }
  const htmlContent = printArea.innerHTML;
  const linkTags = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  let linksHtml = '';
  linkTags.forEach(lnk => {
    if (lnk.href) {
      linksHtml += `<link rel="stylesheet" href="${lnk.href}">`;
    }
  });
  const printOverrides = `
    <style>
      /* ensure printed content uses full width and shows table fully */
      .table-responsive { overflow: visible !important; }
      table { width: 100% !important; border-collapse: collapse !important; }
      table th, table td { border: 1px solid #000 !important; padding: 6px !important; }
      input, textarea { border: 1px solid #000 !important; background: transparent !important; -webkit-print-color-adjust: exact; }
      .no-print { display: none !important; }
      body { -webkit-print-color-adjust: exact; margin: 10mm; color: #000; background: #fff; }
      tr { page-break-inside: avoid; }
      @page { size: A4; margin: 10mm; }
    </style>
  `;

  const printWindow = window.open('', '_blank', 'toolbar=0,location=0,menubar=0,width=1200,height=800');
  printWindow.document.open();
  printWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Print Preview</title>
        ${linksHtml}
        ${printOverrides}
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 700);
}
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('btnPrint');
  if (btn) {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      printDiv();
    });
  }
});
