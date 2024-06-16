var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://mdewcm2024.github.io/1a-ag1 \n 網誌:\xa0 https://mdewcm2024.github.io/1a-ag1/blog/ \xa0 \n 簡報:\xa0 https://mdewcm2024.github.io/1a-ag1/reveal/ \n 倉儲:\xa0 https://github.com/mdewcm2024/1a-ag1 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'Git Help', 'text': '\n \n git-help 應用連結 \n', 'tags': '', 'url': 'Git Help.html'}, {'title': '用途', 'text': '是 Git 中的一个命令，用於顯示有關 Git 命令及其使用方法的信息。它可以幫助用户快速獲取關於特定 Git 命令的詳細說明和使用示例。 git-help  可以通過幾種方式使用：\n 1.顯示幫助信息: \n例如:顯示\xa0 git commit  的幫助信息：\n 2.使用簡寫形式： \n例如:顯示  git status  的幫助信息：\n 3.查看幫助文檔的具體部分 \n 4.在瀏覽器中查看幫助頁面： \n 例如:在瀏覽器中查看  git log  的幫助信息： \n git-help  命令是非常有用的工具，尤其是當你不確定某个命令的用法或需要快速参考时。通過这个命令，你可以更好地了解和掌握 Git 的各種功能和命令 \n \n \n \n \n', 'tags': '', 'url': '用途.html'}, {'title': 'GIT HELP常用指令', 'text': '顯示特定命令的幫助信息 \n git  help  < command > \n \n git  help  commit  \n \n使用簡寫形式獲取幫助信息\n \n git < command > -- help \n \n \n git status -- help   \n \n列出所有可用的 Git 命令\n \n git  help  -a  \n \n列出所有 Git 的概述幫助（包括子命令和指南）\n \n git  help  -g  \n \n在瀏覽器中查看幫助頁面\n \n git  help  --web < command > \n \n \n git  help  --web  log   \n \n查看 Git 的常用命令總結\n \n git  help  everyday  \n \n查看 Git 的概述和教程\n \n git  help  tutorial git  help  glossary  \n \n獲取幫助命令的使用幫助\n \n git  help   help   \n \n實用例子\n \n \n 查看  git push  的幫助信息： \n \n git  help  push  \n \n \n \n 在瀏覽器中查看  git rebase  的幫助信息： \n \n git  help  --web rebase  \n \n \n \n 列出所有 Git 命令： \n \n git  help  -a  \n \n \n \n 查看 Git 的教程： \n \n git  help  tutorial  \n \n \n \n 這些指令使使用者能夠快速查找和了解 Git 的各種功能和用法，極大地方便了版本控制的使用 \n \n \n \n \n \n \n 4o \n \n \n', 'tags': '', 'url': 'GIT HELP常用指令.html'}, {'title': 'git', 'text': '查看目前所在分支 \n git branch \n 以目前的內容建立新的分支，分支名稱為"40703199" \n git branch 40703199 \n 將 Head 切換到"40703199" \n git checkout 40703199 \n 改版後, 將內容推向遠端倉儲名稱為"40703199"的分支 \n git push origin 40703199 \n 將分支切回 main \n git checkout main \n 目前 Head 位於 main, 要將名稱為"40703199"的分支內容, 與 main 分支內容合併 \n git merge 40703199 \n 之後再設法處理目前 config/content.htm 與 downloads, images 或其他目錄中的內容合併 \n', 'tags': '', 'url': 'git.html'}, {'title': 'w6', 'text': '1.說明git的使用和ChatGPT的對話 \n 初始化一個新的Git倉庫 \n git init \n ChatGPT對話: \n 用戶: 我想開始一個新的項目，如何使用Git來管理版本控制？ ChatGPT: 你可以在項目目錄中執行 `git init` 命令，這會初始化一個新的Git倉庫。這樣你就可以開始跟蹤文件的變更了。 \n 查看狀態 \n git status \n ChatGPT對話: \n 用戶: 我想查看當前Git倉庫的狀態，有什麼命令可以用嗎？ ChatGPT: 你可以使用 `git status` 命令來查看當前文件的狀態，例如哪些文件已被修改、哪些文件在暫存區中等。 \n 2.內容含git的發展歷史 \n git是由Linus Torvalds在2005年開發的分散式版本系統 \n 1.2005年git誕生:開發者在Linux內核開發過程中遇到了對版本控制系統的需求，由於對當時版本控制系統不滿意，他決定開發全新的版本控制系統，這就是git。 \n 2.2005年4月:git首次公開發布。 \n 3.2005年6月: Linux內核項目轉向git進行版本控制 ， 這是git發展歷史上的一個重要轉折點 ，也是git得到廣泛認可的開始。 \n 4.2007年Github成立，他是一個基於git的程式碼託管平台，成立於2007年，為開發者提供了一個便捷的程式碼託管、協作開發的平台，推動了git的普及和發展。 \n 5.2008年git1.5.6發布，引進一些重要的功能和改進，使git更加穩定和易用。 \n 6.2016年 Microsoft收購Github ，推動了git在開發者社區的地位，並加速Github平台發展。 \n 7.2020年git2.28發布，帶來新功能和改進，包括 增強子模組支持、改進的性能和穩定性 等。 \n 8.2020年Github推出Codespaces和Discussions，為開發者提供更多便利和交流機會。 \n 9.2020年Github宣布支持密碼存儲庫存儲，支持私人存儲庫存在冷藏狀態，以解決長期存儲和備份的問題。 \n 3創作者的履歷 \n Linus Torvalds是git的創辦人之一 \n 本名: Linus Benedict Torvalds \n 出生日期: 1969年12月28日 \n 出生地: 芬蘭赫爾辛基 \n 教育背景: \n 1988年，進入芬蘭赫爾辛基大學就讀，主修計算機科學。 \n 1996年，獲得赫爾辛基大學計算機科學學士學位。 \n 職業生涯 \n 1991年，創建了 Linux 操作系統核心，並開始在全球範圍內發佈。 \n 2005年，開始開發 git 分散式版本控制系統，並於同年向社區發佈。 \n 除了 Linux 和 git 之外，他還參與了許多開源項目的開發和管理，並在計算機科學研究領域發表了許多論文。 \n 獎項和榮譽 \n 1997年，獲得愛因斯坦獎。 \n 1998年，獲得 Free Software Foundation 授予的 Free Software Award。 \n 2010年，獲得 Millennium Technology Prize。 \n 2012年，獲得共享獎。 \n 2014年，獲得亞瑟·克拉克獎。 \n 4. 一般相同專業人士如何利用git解決內容管理問題？ \n 1. 版本控制 \n git 可以追蹤文件的變更歷史，可讓專業人士可以輕鬆地管理文件的不同版本，對於軟體開發者來說尤其重要，他們可以隨時回溯到過去的版本，比較不同版本之間的差異，甚至回滾到較早的版本。對於文檔編輯和內容創作也非常有用，可以追蹤編輯歷史並輕鬆地合併不同版本的變更。 \n 2. 協作開發 \n git 支持多人同時協作開發，多個開發者可以在不同的分支上進行工作，並通過合併操作將自己的工作合併到主分支中。這使得團隊成員可以同時進行工作，而不會互相干擾，從而提高了開發效率。 \n 3. 分支管理 \n git 的分支功能非常強大，可以讓專業人士輕鬆地創建、切換和合併分支。這使得專業人士可以方便地在不影響主要開發流程的情況下進行實驗、修復錯誤或者開發新的功能。 \n 4. 代碼審查 \n git 支持代碼審查功能，開發者可以通過發送合併請求（Pull Request）的方式將自己的代碼提交給其他成員進行審查。這有助於提高代碼質量、發現潛在的問題和增進團隊之間的溝通。 \n 5. 文檔管理 \n git\xa0可以作為一個強大的工具。專業人士可以使用 git 來追蹤文檔的修改歷史，並通過分支和合併操作來管理不同版本的文檔。這使得團隊成員可以輕鬆地協作編輯文檔，同時保持文檔的統一性和準確性。 \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n 配置git使用者資訊: \n 打開命令(CMDorPowerShell)，並輸入命令配置 \n git config --global user.name "Your Name" git config --global user.email "your.email@example.com" \n 建立本地git倉庫: \n 輸入 git init 指令 \n 建立檔案並提交更改: \n 可使用 git add . 添加到暫存區，再提交這些更改到倉庫中 git commit -m "Initial commit " \n 設置git伺服器: \n 在 Windows 上搭建 git 伺服器可以使用軟體如 GitLab、Gitea 或者搭建裸倉庫。 \n 選擇一個合適文件夾作為git伺服器的存儲目錄。可使用 git init --bare 指令執行 \n 連結git客戶端和伺服器: \n 增加遠程倉庫地址輸入指令 git remote add origin <server_address>/<repo_name>.git \n 其中 <server_address>是你git伺服器地址 ， <repo_name>是你在伺服器上創建的倉庫名稱 。 \n 將本地倉庫的內容推送到git伺服器上: \n 使用指令 git push -u origin master 即可 \n 在使用 git pull 拉取伺服器上的更改 \n 5. 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? \n', 'tags': '', 'url': 'w6.html'}, {'title': '設置 Git 配置', 'text': '設置你的 Git 用戶名和電子郵件： \n git config --global user.name "Your Name" git config --global user.email "youremail@example.com" \n 克隆倉庫並進行操作 \n mkdir C:\\AnotherProject cd C:\\AnotherProject git clone C:\\GitServer\\myproject.git \n 在克隆的倉庫中操作 \n cd myproject echo "Some changes" >> README.md git add README.md git commit -m "Made some changes" git push origin master \n \n \n \n \n', 'tags': '', 'url': '設置 Git 配置.html'}, {'title': 'w11', 'text': '請問如何透過 git branch 強化協同管理網際內容的效率, 請將研究結果放到各組頁面下. \n 使用 Git 分支可以有效地管理團隊成員之間的協作內容。以下是使用 Git 分支提高網站內容協作效率的一些方法： \n 1.創建分支以分隔不同的工作流:以為每個工作流創建一個分支，例如功能開發、錯誤修復和內容審核。這有助於保持主分支的清潔和穩定，並允許團隊成員獨立地處理不同的工作。 \n 2.使用分支進行協作:團隊成員可以克隆主分支並在自己的分支上進行工作。然後，他們可以將自己的變更推送到遠程存儲庫，並由其他團隊成員進行審核和合併。 這有助於確保每個變更都經過審查和批准，並防止衝突。 \n 3.使用分支進行分支 ：可以使用分支來創建新功能或修復錯誤。這有助於將工作與主分支隔離，並在合併到主分支之前進行測試。 \n 4.使用分支進行部屬 ：可以使用分支來創建部署分支。 此分支可以包含要部署到生產環境的最新變更。這有助於確保部署的平穩進行，並防止意外更改進入生產環境。 \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'member', 'text': '組長 \n 41223136 \n 組員 \n 41223120 \n 41223121 \n 41223126 \n 41223153 \n', 'tags': '', 'url': 'member.html'}, {'title': '分組專案', 'text': '', 'tags': '', 'url': '分組專案.html'}, {'title': '期末專案', 'text': '可至 這邊 查看期末專案 \n', 'tags': '', 'url': '期末專案.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': '若要改版, 必須確定 /home/runner/.ssh 目錄下 有 id_rsa 與 config \n 若要 Replit 維護分組網站內容, 必須要動態設定 .ssh 下的 id_rsa 與 config \n https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n 內部的txt檔，把內容複製放到記事本修改副檔名，改成html，就可以變成網頁開始，變成一些可以修改變數的內容。 \n 舉例:用了python程式算是半完成品，因為我把他轉成C語言了，但是有成功，結果在下圖。 \n \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};