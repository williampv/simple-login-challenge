@extends('layout')
  
@section('content')

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css">

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
  
                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success" role="alert">
                            {{ session('success') }}
                        </div>
                    @endif
  
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Login</th>
                        </tr>
                        </thead>
                        <tbody id="datatable">
                        </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $( document ).ready(function() {
        
        function getUsersDashboard() {
            var dataTable = $('#datatable');
            var route = '/users';
            
            $.ajax({
                url : route,
                type : 'GET'
            }).done(function(res){           
                var dataRes = res.data
                $(dataTable).empty();
                for(i=0;i<=dataRes.length-1;i++) {
                    $(dataTable).append("<tr><td>"+dataRes[i].id+
                        "<td>"+dataRes[i].name+
                        "<td>"+dataRes[i].usuario_login
                        );
        
                }
            });
        }
        
        getUsersDashboard()
    });
</script>
@endsection