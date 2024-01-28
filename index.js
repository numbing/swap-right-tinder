liked = 0;
fake_interactions = 0;
myInterval = setInterval(function() {
	document.querySelectorAll('[class="button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgi($g-ds-background-like):a"]')[0].click();
	liked++;
	console.log('liked[' + liked + ']');
	if (liked % 5 == 0) {
		document.querySelector('[class="P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px) Mb(8px)--s focus-button-style"]').click();
		fake_interactions++;
		console.log('fake interaction[' + fake_interactions + ']');
	}
}, Math.floor(Math.random() * 4 + 2) * 1000);
