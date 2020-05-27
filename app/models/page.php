<?php
// namespace Jonic\Rotors;

class Page
{
    private array $_file_names;
    public array $config;
    public bool $is_valid;
    public string $path;
    public string $script;
    public string $slug;
    public string $styles;
    public string $view;
    public string $url;

    public function __construct($path, $url)
    {
        $this->path = $path;
        $this->slug = $this->_slug();
        $this->url  = $url;

        $this->_file_names = [
            'config' => 'config.php',
            'script' => 'script.js',
            'styles' => 'styles.css',
            'view'   => 'index.php',
        ];

        $this->is_valid = $this->_file_exists('view');

        if ($this->is_valid) {
            $this->config = $this->_config();
            $this->script = $this->_file_exists('script');
            $this->styles = $this->_file_exists('styles');
        }
    }

    public function not_found()
    {
        return !$this->is_valid;
    }

    public function page_path()
    {
        return implode(
            [
                '/app/pages',
                $this->path,
                '/',
            ]
        );
    }

    public function asset($asset)
    {
        return $this->page_path() . $this->_file_names[$asset];
    }

    public function yield()
    {
        include $this->_file_path('view');
    }

    private function _config()
    {
        $file_name = 'config';

        if ($this->_file_exists($file_name)) {
            return include $this->_file_path($file_name);
        }

        return false;
    }

    private function _file_exists($file_name)
    {
        return file_exists($this->_file_path($file_name));
    }

    private function _file_path($file_name)
    {
        return $this->_page_dir() . $this->_file_names[$file_name];
    }

    private function _page_dir()
    {
        return implode(
            [
                ROTORS_ROOT,
                $this->page_path()
            ]
        );
    }

    private function _slug()
    {
        $path_array = explode('/', $this->path);
        return $path_array[count($path_array) - 1];
    }
}
