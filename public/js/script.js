if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('/sw.js')
    .then(() => console.log(`Service Worker Registered!`))
    .catch(err => console.log(err.message))
}

const certifications = [{
  name: `Advanced JavaScript Concepts`,
  date: `2019-04-01`,
  link: `https://www.udemy.com/certificate/UC-28WZJAIT/`
}, {
  name: `Node.js: The Complete Guide to Build RESTful APIs`,
  date: `2019-02-01`,
  link: `https://www.udemy.com/certificate/UC-060NYBFZ/`
}, {
  name: `The Complete Node.js Developer Course`,
  date: `2019-02-01`,
  link: `https://www.udemy.com/certificate/UC-QV0XMDQL/`
}, {
  name: `The Modern JavaScript Bootcamp`,
  date: `2019-02-01`,
  link: `https://www.udemy.com/certificate/UC-EOUSVA0W/`
}, {
  name: `Pre-Programming: Everything You Need To Know Before You Code`,
  date: `2019-01-01`,
  link: `https://www.udemy.com/certificate/UC-ZNQVIPXD/`
}, {
  name: `The Complete Cyber Security Course : Hackers Exposed!`,
  date: `2019-01-01`,
  link: `https://www.udemy.com/certificate/UC-B7HHYKFQ/`
}, {
  name: `The Complete Cyber Security Course : Hackers Exposed!`,
  date: `2019-01-01`,
  link: `https://www.udemy.com/certificate/UC-B7HHYKFQ/`
}, {
  name: `The Complete JavaScript Course 2019: Build Real Projects!`,
  date: `2019-01-01`,
  link: `https://www.udemy.com/certificate/UC-BV80ZEVJ/`
}, {
  name: `Responsive Web Design`,
  date: `2018-09-01`,
  link: `https://www.freecodecamp.org/certification/aaronshivers/responsive-web-design`
}, {
  name: `The Ultimate MySql Bootcamp - Go From Sql Beginner To Expert`,
  date: `2018-08-01`,
  link: `https://www.udemy.com/certificate/UC-M0LOGSHL/`
}, {
  name: `The Complete Sql Bootcamp`,
  date: `2018-07-01`,
  link: `https://www.udemy.com/certificate/UC-U7GGV1AU/`
}]

const certificationList = document.getElementById('certificationList')

certifications.forEach(certification => {
  const link = document.createElement('a')
  link.classList.add('list-group-item', 'list-group-item-action')
  link.textContent = certification.name
  link.rel = `noreferrer`
  link.href = certification.link
  link.target = `_blank`
  certificationList.appendChild(link)
})



