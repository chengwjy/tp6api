<?php

declare(strict_types=1);

namespace app;

use think\Model;

abstract class BaseModel extends Model
{
    public $sortBy = 'create_time';

    public $sortOrder = 'asc';

    protected $autoWriteTimestamp = true;

    protected $createTime = 'create_time';

    protected $updateTime = 'update_time';

    /**
     * 获取所有.
     */
    public function all()
    {
        return $this->order($this->sortBy, $this->sortOrder)
            ->select();
    }

    /**
     * 获取分页.
     *
     * @param [type] $paginate
     */
    public function paginate($paginate)
    {
        return $this->order($this->sortBy, $this->sortOrder)
            ->paginate($paginate);
    }

    /**
     * 添加一条记录.
     *
     * @param [type] $paginate
     * @param mixed $input
     */
    public function add($input)
    {
        $this->save($input);

        return $this;
    }

    /**
     * 删除一条记录.
     *
     * @param [type] $id
     */
    public function remove($id)
    {
        return $this->find($id)->delete();
    }

    /**
     * 更新一条记录.
     *
     * @param [type] $id
     */
    public function renew($id, array $input)
    {
        $model = $this->find($id);
        $model->save($input);

        return $model;
    }
}
