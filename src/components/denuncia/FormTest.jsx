import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import { Email } from './email';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const emailHtml = render(<Email url="https://example.com" />);

const options = {
  from: 'alejomfraile@gmail.com',
  to: 'mdpdataset@gmail.com',
  subject: 'hello world',
  html: emailHtml,
};

sendgrid.send(options);
