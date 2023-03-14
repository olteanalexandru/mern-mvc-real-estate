"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rawHTML = `
<div  >
<div id="mc_embed_signup" >
<form action="https://gmail.us12.list-manage.com/subscribe/post?u=84c60494026f0aa398aa412ab&amp;id=e2eb78ff32" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" style="background: aliceblue" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Aboneaza-te</h2>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email : <span class="asterisk"></span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_84c60494026f0aa398aa412ab_e2eb78ff32" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">    
        </div>
    </div>
</form>
</div>

</div>
`;
const Mail = () => <div dangerouslySetInnerHTML={{ __html: rawHTML }}/>;
exports.default = Mail;
//# sourceMappingURL=Mail.jsx.map