<?php
/**
 * @package   ScandiPWA\CookieBot
 * @author    Dmitrijs Tarasovs <dmitrijs.tarasovs@scandiweb.com>
 */

namespace ScandiPWA\CookieBot\Model\Resolver;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\Resolver\ContextInterface;
use Magento\Framework\GraphQl\Query\Resolver\Value;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Magento\Store\Model\ScopeInterface;

/**
 * Class GetCookiebot
 *
 * @package ScandiPWA\GetCookiebot\Model\Resolver
 */
class GetCookiebot implements ResolverInterface
{
    /**
     * @var ScopeConfigInterface
     */
    private $scopeConfig;

    /**
     * GetCookiebot constructor.
     *
     * @param ScopeConfigInterface $scopeConfig
     */
    public function __construct(
        ScopeConfigInterface $scopeConfig
    )
    {
        $this->scopeConfig = $scopeConfig;
    }

    /**
     * Get cookiebot configuration
     *
     * @param Field $field
     * @param ContextInterface $context
     * @param ResolveInfo $info
     * @param array|null $value
     * @param array|null $args
     *
     * @return array|Value|mixed
     */
    public function resolve(Field $field, $context, ResolveInfo $info, array $value = null, array $args = null)
    {
        return [
            'enabled' => (bool)$this->scopeConfig->getValue('cookie_bot/general/enabled', ScopeInterface::SCOPE_STORE),
            'group_id' => $this->scopeConfig->getValue('cookie_bot/general/group_id', ScopeInterface::SCOPE_STORE)
        ];
    }
}
