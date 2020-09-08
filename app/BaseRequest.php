<?php

declare(strict_types=1);


namespace app;

use think\exception\ValidateException;
use think\Response;
use think\Validate;

abstract class BaseRequest extends Request
{
    /**
     * @var bool
     */
    public $batch = false;

    /**
     * @var string
     */
    protected $currentScene;

    /**
     * @var array
     */
    protected $scene = [];

    /**
     * @var array
     */
    protected $rule = [];

    /**
     * @var array
     */
    protected $message = [];

    /**
     * 指定场景验证
     *
     * @param string $scene
     * @return $this
     */
    public function scene($scene)
    {
        $this->currentScene = $scene;
        return $this;
    }

    /**
     * 批量验证
     *
     * @param [type] $batch
     * @return $this
     */
    public function batch($batch)
    {
        $this->batch = $batch;

        return $this;
    }

    /**
     * 验证数据.
     *
     * @return bool|Response
     */
    public function validate()
    {
        $validate = new Validate();
        $validate->rule($this->rule);

        // 验证场景
        if ($this->currentScene) {
            $only = $this->scene[$this->currentScene];
            $validate->only($only);
        }

        $data = $this->param();

        $res =$validate->rule($this->rule)->message($this->message)->batch($this->batch)->failException(false)->check($data);
        if(!$res){
            return $validate->getError();
        }else{
            return true;
        }
    }
}
