# Git e GitHub

## Git

- Sistema de versionamento de código.
- Conjunto de alterações (commits).
- Ramificações (branches).
  - Várias versões do mesmo código no mesmo repositório.
  - É possível unir as diversas branches em um commit só.
- Master/Main
  - Fio principal de branches.
- Atomic Commits
  - Commits que mudam somente uma feature do código.
  - Commits mais limpos e de mais fácil manutenção.
- Vantagens:

  1. Consistência dos arquivos.
  2. Histórico do que foi feito.
  3. Serviços gratuitos de Cloud.
  4. Trabalho em equipe.

- Atualizando e instalando o git:

  ```
  sudo apt update && sudo apt upgrade -y && sudo apt install git -y
  ```

- Configuração inicial:

  ```
  git config --global user.name "nome"
  git config --global user.email email
  git config --global init.defaultBranch main
  git config --global color.ui auto
  git config --global pull.rebase false
  ```

- Para listar as configurações:

  ```
  git config --get user.name
  ```

- Comandos Git:

```
//Adiciona um repositório remoto associado ao repositório local.
git remote add origin <linkRepo>
git remove -v

//Notifica  a situação atual do repositório.
git status

//Apresenta informações sobre os commits.
git log

//Adiciona arquivos no sistema.
git add <arquivos>

//Salva as mudanças realizadas nos arquivos.
git commit -m "Mensagem descritiva"

//Move um repo para um commit específico.
git reset < --soft ou --hard > <hashCommit>

//Mostra as branches existentes, ou cria uma nova.
git branch <novaBranch>

//Mudar de branch
git checkout -b <branch>

//Puxa o conteúdo do repo remoto para o repo local.
git pull <remote> <branch>

//Envia o conteúdo do repo local para o repo remoto.
git push <remote> <branch>

//Clona um repo para a máquina local.
git clone <link>

//Compara o repo local e o remoto.
git fetch
```

- Chave SSH
  - Chave de criptografia.
  - Criptografia Assimétrica.
    - Dividida em chave pública e privada.
    - Chave privada NUNCA deve ser revelada para outras pessoas.
  - Geração de chaves:
  ```
  ssh-keygen -t ed25519 -C "email"
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
  ```

## GitHub
