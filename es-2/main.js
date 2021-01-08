const app = new Vue({
   el: '#app',
   data:{
      cds: null
   },
   mounted: function(){
      axios.get('http://localhost/php-ajax-dischi/es-2/db.php')
      .then(result => this.cds = result.data.response);
   }
});
