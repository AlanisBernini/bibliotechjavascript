let isMenuOpen = false;
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");
const main = document.querySelector("#main");

const iconMenu = document.querySelector("#icon-menu");
const iconClose = document.querySelector("#icon-close");

const menuItems = document.querySelectorAll(".menu-item");

function openMenu() {

  const size = "250px"

  menu.style.width = size;
  header.style.marginLeft = size;
  main.style.marginLeft = size;
  iconMenu.style.display = "none";
  iconClose.style.display = "block";
}

function closeMenu() {

  const size = "60px"

  menu.style.width = size;
  header.style.marginLeft = size;
  main.style.marginLeft = size;
  iconMenu.style.display = "block";
  iconClose.style.display = "none";
}


function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  menuItems.forEach((item) => {
    const description = item.querySelector("span");
    description.style.display = isMenuOpen ? "block" : "none";
  });

  if (isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
    closeSubmenus();
  }
}

function toggleSubmenu(submenuId) {
  const submenu = document.getElementById(submenuId);

  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function closeSubmenus() {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach((submenu) => {
    submenu.style.display = "none";
  });  
}

const authors = [
  {
    authorName: "Lucas Alencar",
    email: "lucasalencar@example.com",
    birthdate: "1980-05-14",
    status: "Ativo",
  },
  {
    authorName: "Camila Siqueira",
    email: "camila.siqueira@example.com",
    birthdate: "1975-09-21",
   status: "Ativo",
  },
  {
    authorName: "Rafael Moura",
    email: "rafael.moura@example.com",
    birthdate: "1968-03-07",
   status: "Ativo",
  },
  {
    authorName: "Juliana Ferreira",
    email: "juliana.ferreira@example.com",
   birthdate: "1990-12-15",
   status: "Ativo",
  },
  {
    authorName: "Carlos Antunes",
    email: "carlos.antunes@example.com",
   birthdate: "1943-04-22",
   status: "Aposentado",
  },
  {
    authorName: "Mariana Prado",
    email: "mariana.prado@example.com",
   birthdate: "1988-07-19",
   status: "Ativo",
  },
  {
    authorName: "Pedro Albuquerque",
    email: "pedro.albuquerque@example.com",
    birthdate: "1972-11-30",
   status: "Ativo",
  },
  {
    authorName: "Ana Clara Ramos",
    email: "ana.ramos@example.com",
    birthdate: "1985-08-23",
   status: "Ativo",
  },
  {
    authorName: "João Silva",
    email: "joao.silva@example.com",
    birthdate: "1955-02-10",
   status: "Aposentado",
  },
  {
    authorName: "Larissa Pereira",
    email: "larissa.pereira@example.com",
    birthdate: "1992-06-03",
   status: "Ativo",
  },
  {
    authorName: "Felipe Santana",
    email: "felipe.santana@example.com",
    birthdate: "1981-01-25",
   status: "Ativo",
  },
  {
    authorName: "Roberta Nunes",
    email: "roberta.nunes@example.com",
    birthdate: "1995-11-12",
   status: "Ativo",
  },
  {
    authorName: "Thiago Costa",
    email: "thiago.costa@example.com",
    birthdate: "1979-09-05",
   status: "Ativo",
  },
  {
    authorName: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    birthdate: "1964-04-18",
   status: "Aposentado",
  },
  {
    authorName: "Ricardo Gomes",
    email: "ricardo.gomes@example.com",
    birthdate: "1976-07-10",
   status: "Ativo",
  },
  {
    authorName: "Patrícia Rocha",
    email: "patricia.rocha@example.com",
    birthdate: "1984-10-08",
   status: "Ativo",
  },
  {
    authorName: "Gabriel Sousa",
    email: "gabriel.sousa@example.com",
    birthdate: "1998-12-02",
   status: "Ativo",
  },
  {
    authorName: "Isabela Mendes",
    email: "isabela.mendes@example.com",
    birthdate: "1983-03-15",
   status: "Ativo",
  },
  {
    authorName: "Bruno Araújo",
    email: "bruno.araujo@example.com",
    birthdate: "1974-09-09",
   status: "Ativo",
  },
  {
    authorName: "Cláudia Teixeira",
    email: "claudia.teixeira@example.com",
    birthdate: "1958-02-18",
   status: "Aposentado",
  },
  {
    authorName: "Renato Reis",
    email: "renato.reis@example.com",
    birthdate: "1967-11-27",
   status: "Aposentado",
  },
  {
    authorName: "Paula Cardoso",
    email: "paula.cardoso@example.com",
    birthdate: "1989-05-04",
   status: "Ativo",
  },
  {
    authorName: "Daniel Martins",
    email: "daniel.martins@example.com",
    birthdate: "1978-01-12",
   status: "Ativo",
  },
  {
    authorName: "Lívia Souza",
    email: "livia.souza@example.com",
    birthdate: "1991-08-30",
   status: "Ativo",
  },
  {
    authorName: "André Rocha",
    email: "andre.rocha@example.com",
    birthdate: "1987-06-28",
   status: "Ativo",
  },
  {
    authorName: "Beatriz Figueira",
    email: "beatriz.figueira@example.com",
    birthdate: "1994-04-13",
   status: "Ativo",
  },
  {
    authorName: "Leonardo Batista",
    email: "leonardo.batista@example.com",
    birthdate: "1969-12-21",
   status: "Ativo",
  },
  {
    authorName: "Tatiana Moreira",
    email: "tatiana.moreira@example.com",
    birthdate: "1982-10-05",
   status: "Ativo",
  },
  {
    authorName: "Rodrigo Dantas",
    email: "rodrigo.dantas@example.com",
    birthdate: "1977-07-17",
   status: "Ativo",
  },
  {
    authorName: "Cecília Andrade",
    email: "cecilia.andrade@example.com",
    birthdate: "1959-03-01",
   status: "Aposentado",
  },
  {
    authorName: "Marcelo Brito",
    email: "marcelo.brito@example.com",
    birthdate: "1980-09-23",
   status: "Ativo",
  },
  {
    authorName: "Júlia Tavares",
    email: "julia.tavares@example.com",
    birthdate: "1996-11-07",
   status: "Ativo",
  },
  {
    authorName: "Eduardo Ribeiro",
    email: "eduardo.ribeiro@example.com",
    birthdate: "1970-06-11",
   status: "Ativo",
  },
  {
    authorName: "Marta Silva",
    email: "marta.silva@example.com",
    birthdate: "1985-02-27",
   status: "Ativo",
  },
  {
    authorName: "Ivan Correia",
    email: "ivan.correia@example.com",
    birthdate: "1989-10-15",
   status: "Ativo",
  },
  {
    authorName: "Diana Ribeiro",
    email: "diana.ribeiro@example.com",
    birthdate: "1997-04-22",
   status: "Ativo",
  },
  {
    authorName: "Ricardo Araújo",
    email: "ricardo.araujo@example.com",
    birthdate: "1973-12-29",
   status: "Ativo",
  },
  {
    authorName: "Verônica Cunha",
    email: "veronica.cunha@example.com",
    birthdate: "1983-08-10",
   status: "Ativo",
  },
  {
    authorName: "Marcos Vieira",
    email: "marcos.vieira@example.com",
    birthdate: "1965-05-12",
   status: "Aposentado",
  },
  {
    authorName: "Tatiane Campos",
    email: "tatiane.campos@example.com",
    birthdate: "1986-09-14",
   status: "Ativo",
  },
  {
    authorName: "Renata Dias",
    email: "renata.dias@example.com",
    birthdate: "1975-11-02",
    status: "Ativo",
  },
];

const authorWithDateUpdated = authors.map(author => {
  const date = new Date(author.birthdate);
  return {
    ...author,
    birthdate: new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
});

function deleteAuthor(index) {
  console.log(index)
  authorWithDateUpdated.splice(index, 1);

  const tbody = document.getElementById("table-body");
 
  tbody.innerHTML = "";

  injectableRows("table-body", authorWithDateUpdated);
}

function addAuthorRow(authorName, email, birthdate, status, index) {
  return `
        <tr id=${index}>
          <td>${authorName}</td>
          <td>${email}}</td>
          <td>${birthdate}</td>
          <td>${status}</td>
          <td class="table-actions">
            <button class="edit-button">
              <i class="material-symbols-outlined">delete</span>
            </button>
            <button onclick="deleteAuthor(${index})" class="delete-button">
              <i class="material-symbols-outlined">edit</span>
            </button>
          </td>
        </tr>
    `;
}

function injectableRows(tbodyId, authorData) {
  const tbody = document.getElementById(tbodyId)

  let rows = "";

  authorData.forEach((author, index) => {
    rows += addAuthorRow(
      author.authorName,
      author.email,
      author.birthdate,
      author.status,
      index
    );
  });

  tbody.innerHTML += rows;
}

injectableRows("table-body", authors);
