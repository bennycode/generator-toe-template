module.exports = {
  build_main_html: {
    files: [{
      cwd: '<%= dir.src_main_html %>',
      dest: '<%= dir.build_main_html %>',
      expand: true,
      src: '**/*.html'
    }]
  },
  build_main_js: {
    files: [{
      cwd: '<%= dir.src_main_js %>',
      dest: '<%= dir.build_main_js %>',
      expand: true,
      src: '**/*.js'
    }]
  },
  build_test_e2e_js: {
    files: [{
      cwd: '<%= dir.src_test_e2e_js %>',
      dest: '<%= dir.build_test_e2e_js %>',
      expand: true,
      src: '**/*.js'
    }]
  }
};
