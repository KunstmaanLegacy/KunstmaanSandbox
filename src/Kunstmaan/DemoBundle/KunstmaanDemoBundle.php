<?php

namespace Kunstmaan\DemoBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class KunstmaanDemoBundle extends Bundle
{
	public function getParent()
	{
		return 'KunstmaanViewBundle';
	}
}
