<?php



	$number_of_posts = 10;
	$format = 'xml';



	  $link = mysql_connect('localhost','root','root') or die('Cannot connect to the DB');
	  @mysql_select_db('home_food',$link) or die('Cannot select the DB');


	  $query = "SELECT name from reg_users";
          $result = @mysql_query($query,$link) or die('Errant query:  '.$query) ;


	$posts = array();
	if(@mysql_num_rows($result)) {
		while($post = @mysql_fetch_assoc($result)) {
			 $posts[] = array('post'=>$post);

		}
	}

	if($format == 'json') {
		header('Content-type: application/json');
		echo json_encode(array('posts'=>$posts));
	}
	 else {
	    header('Content-type: text/xml');
	    echo '<posts>';
	    foreach($posts as $index => $post) {
	      if(is_array($post)) {
	        foreach($post as $key => $value) {
	          if(is_array($value)) {
	            foreach($value as $tag => $val) {
	              echo '<',$tag,'>',htmlentities($val),'</',$tag,'>';
	            }
	          }
	        }
	      }
	    }
	    echo '</posts>';
	  }



	@mysql_close($link);


?>