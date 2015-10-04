<?php defined( '_JEXEC' ) or die( 'Restricted access' );
$doc = JFactory::getDocument();
JHtml::_('jquery.framework');

?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<jdoc:include type="head" />

<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/DFSV/css/style.min.css" type="text/css" />
<script src="<?php echo $this->baseurl ?>/templates/DFSV/js/main.min.js"></script>
<?php unset($this->_scripts[JURI::root(true).'/media/jui/js/bootstrap.min.js']); ?>
<!--[if lt IE 9]>
<script src="<?php echo $this->baseurl ?>/templates/DFSV/js/ie-support.min.js"></script>
    <![endif]-->

</head>
<body>

<header id="header" class="grid">
<a href="/"><img src="<?php echo $this->baseurl ?>/templates/DFSV/images/logo.png"/ alt="Dairy Food Safety Victoria" id="logo"></a>
<jdoc:include type="modules" name="headerTop" />

<jdoc:include type="modules" name="navigation" />
<jdoc:include type="modules" name="search-banner" />
<jdoc:include type="modules" name="headerMiddle" />
<jdoc:include type="modules" name="headerBottom" />
</header>
    <jdoc:include type="modules" name="banner" />
    <section id ="content" class="grid default-canvas">
        <jdoc:include type="modules" name="contentTop" />
        <section class="clearfix">
             <jdoc:include type="modules" name="contentMiddle" />
         </section>
        <jdoc:include type="modules" name="contentBottom" />

    </section>



<footer id="footer">
  <div class="grid">
    <div class="clearfix" id="footer-top">
     <jdoc:include type="modules" name="footerTop" />
    </div>

        <div class="clearfix">
            <jdoc:include type="modules" name="footerMiddle" />
        </div>
        <div>
            <jdoc:include type="modules" name="footerBottom" />
        </div>
        <div id="development">
            <p>Website design by
              <a href="https://www.butterfly.com.au/" target="_blank"><span>Butterfly</span></a>
            </p>
        </div>
    </div>
</footer>

</body>