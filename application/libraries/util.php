<?

/**
 *
 */
if ( ! defined( "BASEPATH" ) ) {
	exit( "No direct script access allowed" ) ;
}

/**
 *
 */
class util {

	/**
	 * [get_var description]
	 *
	 * @param  [type]     $key   [description]
	 * @param  string     $local [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2015-12-18
	 */
	public function get_var( $key , $local = "PGSC" , $default = false ) {
		$local_valid = array( "P" , "G" , "S" , "C" ) ;
		$local = explode( "" , $local ) ;
		$ar = array_count_values( $local ) ;

		foreach ( $ar as $key_use => $value ) {
			// verifica se tem valor repetido.
			if ( $value > 1 ) trigger_error( "Existem valores repetidos no segundo parametro" ) ;

			// verifica se os valores são validos
			if ( ! in_array( $key_use , $local_valid ) ) trigger_error( "Existe valores invalidos no segundo parametro" ) ;

			switch ( $key_use ) {
				case "P":
					if ( array_key_exists( $key , $_POST ) ) return $_POST{ $key } ;
					break ;
				case "G":
					if ( array_key_exists( $key , $_GET ) ) return $_GET{ $key } ;
					break ;
				case "S":
					if ( array_key_exists( $key , $_SESSION ) ) return $_POST{ $_SESSION } ;
					break ;
				case "C":
					if ( array_key_exists( $key , $_COOKIE ) ) return $_COOKIE{ $key } ;
					break ;
				default:
					return $default ;
			}
		}
	}
}

?>