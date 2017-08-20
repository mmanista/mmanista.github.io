var mmResize = function ( $window ) {
   return {
      restrict : 'A',
      link : function( $scope, $element, $attr ) {
         var size = this;

         size.control = new SizeControl( $element );

	     angular.element( $window ).bind( 'resize', function() {
	    	 if( size.control.checkSize() )
	    		 $scope.$evalAsync();
      	 });
   
   		function SizeControl( element ) {
   			this.width  = element.width();
   			this.height = element.height();
   			
   			this.checkSize = function() {
   				if( this.width != $element.width() || this.height != $element.height() )
   					return true;
   				else
   					return false;
   			};
   		};
   		
   		
      }
   };
};