<?php

if ( ! defined( "BASEPATH" ) ) {
	exit( "No direct script access allowed" ) ;
}

if ( ! function_exists( "html_title") ) {
	/**
	 * [html_title description]
	 *
	 * @param  string     $info  [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-21
	 */
	function html_title( $info ) {
		$attr = array() ;

		$attr["class"] = ( isset( $info{"class"} ) ) ? $info{"class"} : "container-group" ;

		$content = ( isset( $info{"value"} ) ) ? $info{"value"} : null ;

		if ( isset( $info{"id"} ) ) {
			$attr["id"] = $info{"id"} ;
		}

		$attribute = "" ;

		foreach ( $attr as $key => $value ) {
			$attribute .= sprintf( " %s=\"%s\"" , $key , $value ) ;
		}

		return sprintf( "<div %s ><h1>%s</h1></div>" , $attribute , $content ) ;
	}
}

if ( ! function_exists( "html_label") ) {
	/**
	 * [html_label description]
	 *
	 * @param  string     $info  [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-21
	 */
	function html_label( $info ) {
		$attr = array() ;

		$attr["class"] = ( isset( $info{"class"} ) ) ? $info{"class"} : "control-label" ;
		$attr["for"] = ( isset( $info{"for"} ) ) ? $info{"for"} : "" ;

		$content = ( isset( $info{"value"} ) ) ? $info{"value"} : null ;

		if ( isset( $info{"id"} ) ) {
			$attr["id"] = $info{"id"} ;
		}

		$attribute = "" ;

		foreach ( $attr as $key => $value ) {
			$attribute .= sprintf( " %s=\"%s\"" , $key , $value ) ;
		}

		return sprintf( "<label %s >%s</label>" , $attribute , $content ) ;
	}
}

if ( ! function_exists( "html_input_button") ) {
	/**
	 * [html_input_button description]
	 *
	 * @param  string     $info  [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-21
	 */
	function html_input_button( $info ) {
		$attr = array() ;

		$attr["type"] = "button" ;

		$attr["class"] = ( isset( $info{"class"} ) ) ? $info{"class"} : "btn" ;


		$attr["value"] = ( isset( $info{"value"} ) ) ? $info{"value"} : null ;

		if ( isset( $info{"disabled"} ) ) {
			$attr["disabled"] = $info{"disabled"} ;
		}

		if ( isset( $info{"id"} ) ) {
			$attr["id"] = $info{"id"} ;
		}

		$attribute = "" ;

		foreach ( $attr as $key => $value ) {
			$attribute .= sprintf( " %s=\"%s\"" , $key , $value ) ;
		}

		return sprintf( "<input %s />" , $attribute ) ;
	}
}



if ( ! function_exists( "html_input_text") ) {
	/**
	 * [input_text description]
	 *
	 * @param  string     $info  [description]
	 * @return [type]            [description]
	 *
	 * @author Daniel Araujo <daniel.araujo@grupofolha.com.br>
	 * @since  2016-01-21
	 */
	function html_input_text( $info ) {
		$attr = array() ;

		$attr["type"] = "text" ;

		$attr["name"] = ( isset( $info{"name"} ) ) ? $info{"name"} : sprintf( "field_%s" , $type ) ;
		$attr["class"] = ( isset( $info{"class"} ) ) ? $info{"class"} : "form-control" ;
		$attr["id"] = ( isset( $info{"id"} ) ) ? $info{"id"} : $attr{"name"} ;
		$attr["placeholder"] = ( isset( $info{"placeholder"} ) ) ? $info{"placeholder"} : "" ;
		$attr["data-toggle"] = ( isset( $info{"data-toggle"} ) ) ? $info{"data-toggle"} : "popover" ;
		$attr["data-content"] = ( isset( $info{"data-content"} ) ) ? $info{"data-content"} : "" ;
		$attr["data-trigger"] = ( isset( $info{"data-trigger"} ) ) ? $info{"data-trigger"} : "focus" ;
		$attr["data-placement"] = ( isset( $info{"data-placement"} ) ) ? $info{"data-placement"} : "top" ;
		$attr["value"] = ( isset( $info{"value"} ) ) ? $info{"value"} : null ;
		$attr["max_length"] = ( isset( $info{"max_length"} ) ) ? $info{"max_length"} : 255 ;

		if ( isset( $info{"disabled"} ) ) {
			$attr["disabled"] = $info{"disabled"} ;
		}

		$attribute = "" ;

		foreach ( $attr as $key => $value ) {
			$attribute .= sprintf( " %s=\"%s\"" , $key , $value ) ;
		}

		return sprintf( "<input %s />" , $attribute ) ;
	}
}

?>