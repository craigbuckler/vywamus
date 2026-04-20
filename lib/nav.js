// navigation functions
import { tacs } from 'publican';

// breadcrumb navigation
export function breadcrumb( currentPage ) {

  const crumb = [];
  const div = '\n<span class="dvir"><i class="fa-solid fa-angle-right"></i></span>';
  recurseNav( tacs.nav );

  const ret = crumb
    .map(n => `<span><a href="${ n.link }"${ n.link === currentPage ? ' class="active"' : '' }>${ n.menu }</a><span>${ div }`)
    .join('\n');

  return `<span><a href="${ tacs.root }">Home</a>${ div }\n${ ret || '' }\n`;

  function recurseNav(nav) {

    let found;

    nav.forEach(n => {

      found = found || currentPage === n.data.link;

      if (!found) {
        found = recurseNav(n.children);
        if (found) crumb.unshift(n.data);
      }

    });

    return found;

  }

}
