var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.5.1.min.js";document.getElementsByTagName('head')[0].appendChild(script);

$.post('./backend.php', {'tab_id':'test', 'user':'test', 'webpage':'test', 'action':'insert_tab'});