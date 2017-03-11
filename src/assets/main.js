$(function() {
$$.ajax({
    url: 'https://www.codeschool.com/users/sklauifi.json',
    dataType: 'jsonp',
    success: function(response) {
      
    }
  });
});

    function addCourses(courses){
     
    var $badges = $('#badges');
        
    courses.forEach(fubction(course) {
                    console.log(course);
                    
     var $course = $('div/>'), {
        'class': 'course'
    }).appendTo($badges);
        
    $('<h3/>', {
        text: course.title
    }).appendTo($course); 
        
        $('<img'/>', {
          src: course.badge
          }).appendTo($course);
        
        $('<a />', {
            'class': 'btn btn-primary',
            target: '_blank',
            href: course.url,
            text: 'See Course'
        }).appendTo($course);
        
        
    })               
                    
                    
                    
                    
                    }    
        
        
        
    });