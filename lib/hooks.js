// function hooks

// processContent hook: determine dates
export function processFileDate(data, filename) {

  // get date from filename if not set
  if (!data.date) {
    const d = filename.match(/(\d{4}-\d{2}-\d{2})_/);
    if (d?.length === 2) data.date = new Date( d[1] );
  }

  // parse date modified
  if (data.modified) {
    const d = new Date( data.modified );
    if (!isNaN(d) && d instanceof Date) data.modified = d;
    else delete data.modified;
  }

}


// processPostRender hook: add further HTML meta data
export function postrenderMeta( output, data ) {
  if (data.isHTML && data.template !== 'redirect.html') {
    output = output.replace('</head>', '<meta name="generator" content="Publican.dev">\n</head>');
  }
  return output;
}
