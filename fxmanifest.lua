fx_version 'adamant'
games {'rdr3', 'gta5' }
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

client_script {
	'resources/dist/client/*.js'
}

server_script {
  'resources/dist/server/*.js'
}

files {
  'ui/dist/index.html',
  'ui/dist/index.css',
  'ui/dist/index.js',
  'ui/dist/*.png'
}


ui_page 'ui/dist/index.html'