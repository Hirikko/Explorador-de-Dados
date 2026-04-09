let globalData = [];  // Variável para armazenar os dados

// Função para carregar e processar o arquivo Excel automaticamente
window.onload = function() {
  const filePath = 'data/dados.ods'; // Caminho para o arquivo Excel

  // Usando fetch para carregar o arquivo
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao carregar o arquivo');
      }
      return response.arrayBuffer(); // Retorna o arquivo como um ArrayBuffer
    })
    .then(data => {
      const workbook = XLSX.read(data, { type: 'buffer' });

      // Seleção da planilha
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Filtra as linhas cuja coluna "D" (índice 3) tem os valores 2 ou 3
      const filteredData = jsonData.filter(row => {
        const perfil = row[Object.keys(row)[3]]; // Obter valor da coluna "D" (4ª coluna)
        return perfil == 2 || perfil == 3;  // Filtrar por 2 ou 3
      });

      globalData = filteredData;  // Armazena os dados filtrados 

      // Gera a tabela com os dados filtrados
      displayDataInTable(globalData);
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo Excel:', error);
    });
};

const r = document.getElementById('rodape');
const a = document.createElement('h2');
a.innerHTML = ["Made","By","<i>Hiriko</i>","©","2025"].join(" ");
a.style.textAlign = "center";
a.style.color = "#F28D9E";
r.appendChild(a);

function displayDataInTable(data) {
  const table = document.getElementById('data-table');
  table.innerHTML = ''; // Limpa a tabela antes de preencher

  // Cria o cabeçalho da tabela
  const headerRow = document.createElement('tr');
  Object.keys(data[0]).forEach((key, index) => {
    // Pula a coluna que você deseja ignorar (exemplo: coluna de índice 3)
    if (index !== 3 && index !== 4) {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    }
  });
  table.appendChild(headerRow);

  // Adiciona os dados à tabela
  data.forEach(row => {
    const rowElement = document.createElement('tr');
    Object.values(row).forEach((value, index) => {
      // Pula a coluna que você deseja ignorar (exemplo: coluna de índice 3)
      if (index !== 3 && index !== 4) {
        const td = document.createElement('td');
        td.textContent = value;
        rowElement.appendChild(td);
      }
    });
    table.appendChild(rowElement);
  });
}

// Função da barra de pesquisa
function searchTable() {
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();
  
  // Filtra os dados com base no termo de pesquisa
  const filteredData = globalData.filter(row => {
    return Object.values(row).some(value => 
      value.toString().toLowerCase().includes(searchTerm)
    );
  });

  // Atualiza a tabela com os dados filtrados
  displayDataInTable(filteredData);
}

