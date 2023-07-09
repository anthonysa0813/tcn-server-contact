const nodemailer = require("nodemailer");

async function mailNodeSendSelection(
  email,
  name,
  titleCampaign,
  whatsapp,
  idService,
  idUser
) {
  // Configurar la cuenta de correo y el de stinatario

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      secure: true,
      auth: {
        user: process.env.MAILER_AUTH,
        pass: process.env.MAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILER_AUTH,
      to: email,
      subject: "Hola, ¡haz sido seleccionado!",
      html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
      rel="stylesheet"
    />
    <title>Bienvenido a Contact BPO</title>
<!--[if mso]>
      <style>
        .button {
         border-radius: 5px;
      background-color: #175676;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 10px;
      text-align: center;
      display: inline-block;
      cursor: pointer;
        }
    
      </style>
    <![endif]-->

    <!--[if !mso]><!-->
      <style>
        .button {
           border-radius: 5px;
      background-color: #175676;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 10px;
      text-align: center;
      display: inline-block;
      font-weight: bold;
      cursor: pointer;
    
        }
      </style>
    <!--<![endif]-->
  </head>
  <body style="font-family: Poppins; width: 1000px">
    <table>
  <tr>
    <td style="mso-margin-top-alt:10px; mso-margin-bottom-alt:10px;">
         <a href="https://www.contactbpo.pe/" target="_blank">
        <img
          width="120"
          style="border-width:0;"
          border="0"
          src="https://res.cloudinary.com/da0d2neas/image/upload/v1682626137/recon_cgpsri.gif"
          alt="página de contactbpo.com"
        />
      </a>
    </td>
  </tr>
    </table>
  
    <div class="name">
      <h4
        style="
          Margin: 0;
          margin-top: 1rem;
          font-family: Poppins;
          font-size: 1.2rem;
          color: #175676;
        "
      >
        ¡Hola ${name}!
      </h4>
      <span style="font-family: Poppins; font-size: 14px; Margin: 0 0 0 0;">
        ¡Queremos felicitarte por haber sido seleccionado para continuar en el proceso de ${titleCampaign}! 
      </span>
        <table style="Margin: 10px 0px 10px 0" >
      <tr>
        <span>Por favor, si aun cuentas con disponibilidad para trabajar con nosotros, confírmanos tu participación y un@ representante del área de <strong>People & Culture</strong> se contactará contigo: </span>
      </tr>
       <table class="darkmode-transparent" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
          <tr style="width:400px;">
             <td  style="border-radius:10px;" >
                <a  href="https://new-tcn-client.vercel.app/api/employeeJob/confirm?response=si&idService=${idService}&idUser=${idUser}" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #1e5d7b;background-color: #EFF8FE;border:1px solid #EFF8FE;border-radius:10px;padding:12px 20px;display: inline-block;">
                   ¡QUIERO CONTINUAR!
                </a>
             </td>
            <td>
              <a href="https://new-tcn-client.vercel.app/api/employeeJob/confirm?response=no&idService=${idService}&idUser=${idUser}" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #1e5d7b;background-color: #EFF8FE;border:1px solid #EFF8FE;border-radius:10px;padding:12px 20px;display: inline-block;margin: 0 0 0 30px">
                  NO POR ESTA VEZ, YA CONSEGUÍ TRABAJO 
                </a>
            </td>
          </tr>
        </table>
        <table>
           <tr>
             <td>
              <p>
                Estamos muy entusiasmados de contar con <strong>perfiles extraordinarios</strong> como el tuyo y queremos agradecerte por habernos tomado en cuenta como una opción para tu futuro y crecimiento laboral 😊
              </p>
             </td>
           </tr>
          <tr>
            <td>
              <p>
                Si conoces a alguien que podría interesarle trabajar con nosotros envíale el siguiente enlace:  
              </p>
            </td>
          </tr>
       </table>
       
      <table>
            <tr>
            <td>
              <strong>Enlace:</strong><a href="https://work.contactamericas.com/" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #1e5d7b;background-color: #EFF8FE;border:1px solid #EFF8FE;border-radius:10px;padding:12px 20px;display: inline-block;margin: 0 0 0 30px">
                      work.contactamericas.com
              </a>
            </td>
          </tr>
          <br>
          <br>
          <tr>
              <td>
              <strong>Whatsapp:</strong><a href="https://work.contactamericas.com/" target="_blank" style="font-size: 17px;font-weight: bold;text-decoration: none;color: #1e5d7b;background-color: #EFF8FE;border:1px solid #EFF8FE;border-radius:10px;padding:12px 20px;display: inline-block;margin: 0 0 0 30px">
                    https://wa.me/51${whatsapp}?text=Hola  
              </a>
            </td>
          </tr>
     </table>
      <div style="Margin: 20px 0px 10px 0px;">
        <span>¡Nos vemos pronto!</span>
      </div>
      <div style="Margin: 20px 0px 10px 0px;">
        <span>El equipo de Contact</span>
      </div>
      </div>
  </body>
</html>


        `,
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log("Mensaje enviado: %s", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  mailNodeSendSelection,
};
