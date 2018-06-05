$(function(){var $anchorToDeactivate=$('#navbar-nav-collapsible a[aria-current]')
$anchorToDeactivate.removeAttr('aria-current')
var pathArray=location.pathname.split('/')
var firstLevelPath=pathArray[1]
var $anchorToActivate=$('#navbar-nav-collapsible a[href*="'+firstLevelPath+'"]').closest('a')
$anchorToActivate.attr('aria-current','page')})
$(function(){$('.card-link').on('click',function(e){var url=$(this).data().href
if(e.shiftKey||e.ctrlKey||e.metaKey){window.open(url,'_blank')}else{window.location=url}})})
$(function(){$('[data-toggle="tooltip"]').tooltip()})
$(function(){$('[data-toggle="modal"]').click(function(){var targetId=$(this).data('target')
$('#'+targetId).modal('show')})})
function swapJoinContent(hash){if(!hash||typeof hash!=='string'){return false}
var parentHash
var childHash
if(hash.indexOf('-')>-1){parentHash='#'+hash.split('-')[0]
childHash='#'+hash}else{parentHash='#'+hash}
var $contentElements=$('.join-content-col > div')
var $contentElementToActivate=$(parentHash)
var $navElements=$('.subnav-col li')
var $navElementToActivate=$navElements.has('a[href$="'+parentHash+'"]')
if(($contentElementToActivate.length===0)||($navElementToActivate.length===0)){return false}
$contentElements.hide()
$contentElementToActivate.show()
$navElements.removeClass('current')
$navElements.find('a').removeAttr('aria-current')
$navElementToActivate.addClass('current')
$navElementToActivate.find('a').attr('aria-current','location')
if(childHash){location.hash=childHash}
else{$('html, body').scrollTop(0)}}
$(function(){$('.join-content-col > div').not('#join').hide()
if(location.hash.length>0){var hash=location.hash.substr(1)
swapJoinContent(hash)}
var $navAnchors=$('.join-us .subnav-col a')
var navPaths=$.map($navAnchors,function(anchor){return anchor.getAttribute('href')})
var $pageAnchors=$('.join-content-col a')
$pageAnchors=$pageAnchors.filter(function(){return $.inArray(this.getAttribute('href'),navPaths)!=-1})
var $allAnchors=$navAnchors.add($pageAnchors)
$allAnchors.on('click',function(e){e.preventDefault()
var dest=$(this).attr('href')
history.pushState(null,null,dest)
var hash=this.hash.substr(1)
swapJoinContent(hash)})})
$(function(){$('.form-icons div').click(function(e){e.preventDefault()
var targetElementId=$(this).data('toggle')
if($(this).attr('aria-expanded')=='false'){$(this).attr('aria-expanded',true)}else{$(this).attr('aria-expanded',false)}
$(this).find('i').toggleClass('current')
$('#'+targetElementId).toggleClass('sr-only')})})
$(function(){var isTouch=false
var isTouchTimer
var curRootClass=''
function addtouchclass(){clearTimeout(isTouchTimer)
isTouch=true
if(curRootClass!='can-touch'){curRootClass='can-touch'
document.documentElement.classList.add(curRootClass)}
isTouchTimer=setTimeout(function(){isTouch=false},1000)}
function removetouchclass(){if(!isTouch&&curRootClass=='can-touch'){isTouch=false
curRootClass=''
document.documentElement.classList.remove('can-touch')}}
document.addEventListener('touchstart',addtouchclass,false)
document.addEventListener('mouseover',removetouchclass,false)})