/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
interface HTML {
  body: any;
  title: any;
}

const Html: (html: HTML) => string = ({ body, title }: HTML) => {
  const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/build/${env}/client.js"></script>  
    </body>
  </html>
`;
};
export default Html;
