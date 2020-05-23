<?php
class Page
{
    public $config;
    public $path;
    public bool $valid;

    public function __construct($path)
    {
        $this->path = $path;
        $this->valid = $this->_view_exists();
        $this->config = $this->_config();

    }

    public function is_not_found()
    {
        return !$this->valid;
    }

    public function yield()
    {
        include $this->_view_path();
    }

    private function _config()
    {
        if ($this->valid) {
            $this->config = include $this->_config_path();
        }
    }

    private function _config_path()
    {
        return $this->_pages_path() . "$this->path/config.php";
    }

    private function _not_found()
    {
        throw Exception;
    }

    private function _pages_path()
    {
        return ROTORS_ROOT . '/app/pages';
    }

    private function _view()
    {
        $this->view = file_get_contents($this->_view_path());
        echo $this->view;
    }

    private function _view_exists()
    {
        return file_exists($this->_view_path());
    }

    private function _view_path()
    {
        return $this->_pages_path() . "$this->path/index.php";
    }
}
