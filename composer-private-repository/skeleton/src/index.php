<?php

namespace Smyeung\Skeleton;

use Smyeung\Package1;
use Smyeung\Package2;

class Index
{
    public function __construct() {
        Package1\Foo::echo();
        Package2\Foo::echo();
    }
}
