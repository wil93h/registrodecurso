<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DatoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nombre' => ['require','max:255'],
            'descripcion' => ['require','max:255'],
            'fechaInicio' => ['require','max:255'],
            'fechaFin' => ['require','max:255'],
            'ubicacion' => ['require','max:255'],
            'departamento' => ['require','max:255'],
            'municipio' => ['require','max:255'],
            'horasCurso' => ['require','max:255'],
            'modalidad' => ['require','max:255'],
            'tipoDeCosto' => ['require','max:255'],
            'costo' => ['require','max:255'],
            'participantes' => ['require','max:255'],
            'numeroCantidadEvaluaciones' => ['require','max:255'],
            'numeroContrato' => ['require','max:255'],
            'numeroOrdenDeCompra' => ['require','max:255'],
            'numeroCompraBolsa' => ['require','max:255'],
            'numeroItem' => ['require','max:255'],
            'programa' => ['require','max:255'],
            'facilitador' => ['require','max:255'],
        ];
    }
}
